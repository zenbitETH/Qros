// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Qrollectible is ERC721 
{

	using Counters for Counters.Counter;
  	Counters.Counter private _tokenIDs; 

    constructor() ERC721("Qrollectible", "QRO") {}

    struct Collectible 
    {
    	uint256 id;
    	address recepient; 
    	string uri;
    }

    mapping(uint256 => Collectible) public Collectibles; 

    function createItem(string memory uri) public returns (uint256)
    {
    	_tokenIDs.increment();
    	uint256 nextID = _tokenIDs.current();
    	_safeMint(msg.sender, nextID);

    	Collectibles[nextID] = Collectible(nextID, msg.sender, uri);

    	return nextID;
    }

    function tokenURI(uint256 tokenID) public view override returns (string memory)
    {
    	require(_exists(tokenID), "ERC721 Metadata: tokenID does not exist");

    	return Collectibles[tokenID].uri;
    }
}

