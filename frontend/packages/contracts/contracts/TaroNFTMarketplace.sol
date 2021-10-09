// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./QrollectibleStorage.sol";
import "./helpers/Ownable.sol";
import "./helpers/Pausable.sol";
import "./helpers/ContextMixin.sol";
import "./helpers/NativeMetaTransaction.sol";


contract TaroNFTMarketplace is Ownable, Pausable, QrollectibleStorage, NativeMetaTransaction 
{
  using SafeMath for uint256;
  using Address for address;

    /**
    * @dev Initialize this contract. Acts as a constructor
    * @param _acceptedToken - Address of the ERC20 accepted for this marketplace
    */
	  constructor (address _acceptedToken, address _owner)
	    public
	  {
	    // EIP712 init
	    _initializeEIP712('Qrollectibles NFT Marketplace', '1');

	    require(_owner != address(0), "Invalid owner");
	    transferOwnership(_owner);

	    require(_acceptedToken.isContract(), "The accepted token address must be a deployed contract");
	    acceptedToken = ERC20Interface(_acceptedToken);
	  }

	 struct Item
	 {
        uint256 id;
        address tokenAddress;
        uint256 tokenId;
        address payable seller;
        uint256 askingPrice;
        uint256 expiresAt;
   	 }

   	 
   	 function createOrder(address tokenAddress, uint256 tokenId, uint256 askingPrice, uint256 expiresAt) public whenNotPaused
   	 {
   	 	_createOrder(tokenAddress, tokenId, askingPrice, expiresAt);
   	 }

   	 function cancelOrder(address tokenAddress, uint256 tokenId) public whenNotPaused 
   	 {
    	_cancelOrder(tokenAddress, tokenId);
  	 }

  	 function safeExecuteOrder(address tokenAddress, uint256 tokenId, uint256 price, bytes memory fingerprint) public whenNotPaused
  	 {
    	_executeOrder(tokenAddress, tokenId, price, fingerprint);
     }

  	 function executeOrder(address tokenAddress, uint256 tokenId, uint256 price) public whenNotPaused
  	 {
    	_executeOrder(tokenAddress, tokenId, price, "");
     }


    function _createOrder(address tokenAddress, uint256 tokenId, uint256 price, uint256 expiresAt) internal  
    {
    	_requireERC721(tokenAddress);

    	address sender = _msgSender();

    	ERC721Interface nftRegistry = ERC721Interface(tokenAddress);
    	address assetOwner = nftRegistry.ownerOf(tokenId);

	    require(sender == assetOwner, "Only the owner can create orders");
	    require
	    (
	      nftRegistry.getApproved(tokenId) == address(this) || nftRegistry.isApprovedForAll(assetOwner, address(this)),
	      "The contract is not authorized to manage the asset"
	    );
	    
	    require(price > 0, "Price should be bigger than 0");
	    require(expiresAt > block.timestamp.add(1 minutes), "Publication should be more than 1 minute in the future");

	    bytes32 orderId = keccak256(
	      abi.encodePacked(
	        block.timestamp,
	        assetOwner,
	        tokenId,
	        tokenAddress,
	        price
	      )
	    );

	    orderByAssetId[tokenAddress][tokenId] = Order({
	      id: orderId,
	      seller: assetOwner,
	      tokenAddress: tokenAddress,
	      price: price,
	      expiresAt: expiresAt
	    });


	    emit OrderCreated(orderId, tokenId, assetOwner, tokenAddress, price, expiresAt);
	  }


	  function _cancelOrder(address tokenAddress, uint256 tokenId) internal returns (Order memory) {
    address sender = _msgSender();
    Order memory order = orderByAssetId[tokenAddress][tokenId];

    require(order.id != 0, "Asset not published");
    require(order.seller == sender || sender == owner(), "Unauthorized user");

    bytes32 orderId = order.id;
    address orderSeller = order.seller;
    address ordertokenAddress = order.tokenAddress;
    delete orderByAssetId[tokenAddress][tokenId];

    emit OrderCancelled(
      orderId,
      tokenId,
      orderSeller,
      ordertokenAddress
    );

    return order;
  }

   function _executeOrder(address tokenAddress, uint256 tokenId, uint256 price, bytes memory fingerprint) internal returns (Order memory)
   {
    _requireERC721(tokenAddress);

    address sender = _msgSender();

    ERC721Verifiable nftRegistry = ERC721Verifiable(tokenAddress);

    if (nftRegistry.supportsInterface(InterfaceId_ValidateFingerprint)) {
      require(
        nftRegistry.verifyFingerprint(tokenId, fingerprint),
        "The asset fingerprint is not valid"
      );
    }
    Order memory order = orderByAssetId[tokenAddress][tokenId];

    require(order.id != 0, "Asset not published");

    address seller = order.seller;

    require(seller != address(0), "Invalid address");
    require(seller != sender, "Unauthorized user");
    require(order.price == price, "The price is not correct");
    require(block.timestamp < order.expiresAt, "The order expired");
    require(seller == nftRegistry.ownerOf(tokenId), "The seller is no longer the owner");


    bytes32 orderId = order.id;
    delete orderByAssetId[tokenAddress][tokenId];

 
    

    // Transfer sale amount to seller
    require(
      acceptedToken.transferFrom(sender, seller, price),
      "Transfering the sale amount to the seller failed"
    );

    // Transfer asset owner
    nftRegistry.safeTransferFrom(
      seller,
      sender,
      tokenId
    );

    emit OrderSuccessful(
      orderId,
      tokenId,
      seller,
      tokenAddress,
      price,
      sender
    );

    return order;
  }

	function _requireERC721(address tokenAddress) internal view {
    require(tokenAddress.isContract(), "The NFT Address should be a contract");

    ERC721Interface nftRegistry = ERC721Interface(tokenAddress);
    require(
      nftRegistry.supportsInterface(ERC721_Interface),
      "The NFT contract has an invalid ERC721 implementation"
    );
  }  

}	  



