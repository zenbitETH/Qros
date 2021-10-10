//######################################
// Contract Addresses and Moralis Init
//######################################
Moralis.initialize("TOYUgAQy6p6Sx3uKprDKcRRjU7AXF7DFxdSNlR2y");
Moralis.serverURL = 'https://2tmlqxwkknpp.moralishost.com:2053/server';
const TOKEN_CONTRACT_ADDRESS = "0x34480e1169E9D78F39eDFD6D8293d8A348e144a4";  
const MARKETPLACE_CONTRACT_ADDRESS = "0x4C454aF41F77DDf442F1BA8C1E9D65D2D6F04e4f";    
const ERC20_TOKEN_CONTRACT_ADDRESS = "0x12f961f564a5fb12b938d8864b6faf5be3abf10b";
const DAO_CONTRACT_ADDRESS = "0xA7a75b9B0712a7923686C0FC4b04856F1cd0d00E";



init = async () => {
    hideElement(userItemsSection);
    window.web3 = await Moralis.Web3.enable();
    window.tokenContract = new web3.eth.Contract(tokenContractAbi, TOKEN_CONTRACT_ADDRESS);
    window.marketplaceContract = new web3.eth.Contract(marketplaceContractAbi, MARKETPLACE_CONTRACT_ADDRESS);
	initUser();
}

hideElement = (element) => element.style.display = "none";
showElement = (element) => element.style.display = "block";

initUser = async () => {
    if (await Moralis.User.current()) {
        hideElement(userConnectButton);
        showElement(userProfileButton);
        showElement(openCreateItemButton);
        showElement(openUserItemsButton);
        showElement(openExploreButton);
        loadUserItems();
    } else {
        showElement(userConnectButton);
        hideElement(userProfileButton);
        hideElement(openCreateItemButton);
        hideElement(openUserItemsButton);
        showElement(openExploreButton);
    }
}

//#########################################################################################


//##############################
// Log in and Log out
//##############################
login = async () => {
    try {
        // bring up metamask, ask them to sign in
        await Moralis.Web3.authenticate();
        initUser();
    } catch (error) {
        alert(error)
    }
}

logout = async () => {
    await Moralis.User.logOut();
    hideElement(userInfo);
    // call initUser() because it takes care of displaying the correct buttons
    initUser();
}

const userConnectButton = document.getElementById("btnConnect");
userConnectButton.onclick = login;

//#########################################################################################


//##################################
// Minting NFTs 
//##################################

mintNft = async (metadataUrl) => {
    // createItem function declared in Qrollectible.sol
    const receipt = await tokenContract.methods.createItem(metadataUrl).send({from: ethereum.selectedAddress});
    console.log(receipt);
    
    //return token ID
    return receipt.events.Transfer.returnValues.tokenId;
}

createItem = async () => {

    const nftFilePath = document.getElementById("layerUrl").value;
    user = await Moralis.User.current();
    const userAddress = user.get('ethAddress');



    // create metadata to store on ipfs
    const metadata = {
        name: itemNameField.value,
        description: itemDescriptionField.value,
        image: nftFilePath
    };

    const nftFileMetadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
    await nftFileMetadataFile.saveIPFS();

    const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();

	const options = {type: "erc20", 
                 	amount: Moralis.Units.Token("10", "18"), 
                 	receiver: DAO_CONTRACT_ADDRESS,
                 	contractAddress: ERC20_TOKEN_CONTRACT_ADDRESS};

	let result = await Moralis.transfer(options);

    const nftId = await mintNft(nftFileMetadataFilePath);

}

//#########################################################################################

//##################################
// Return user QROs
//##################################

  getUserNFTs = async() => {

    user = await Moralis.User.current();
    const userAddress = user.get('ethAddress');

    const options = { 
        chain: 'mumbai', 
        address: userAddress,
        token_address: TOKEN_CONTRACT_ADDRESS
    };

    const qroBalance = await Moralis.Web3.getNFTsForContract(options);
    console.log(qroBalance);

}

//#########################################################################################










