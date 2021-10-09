pragma solidity ^0.7.6;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import "./QrollectibleStorage.sol";
import "../commons/Ownable.sol";
import "../commons/Pausable.sol";
import "../commons/ContextMixin.sol";
import "../commons/NativeMetaTransaction.sol";


contract TaroNFTMarketplace is Ownable, Pausable, QrollectibleStorag, NativeMetaTransaction 
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

     















}





