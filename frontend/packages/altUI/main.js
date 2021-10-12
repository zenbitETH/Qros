//######################################
// Contract Addresses and Moralis Init
//######################################
Moralis.initialize("TOYUgAQy6p6Sx3uKprDKcRRjU7AXF7DFxdSNlR2y");
Moralis.serverURL = 'https://2tmlqxwkknpp.moralishost.com:2053/server';
const NFT_CONTRACT_ADDRESS = "0x103ce30b3594f8af23f21b12e0b9956e27ef1a16";  
const ERC20_TOKEN_CONTRACT_ADDRESS = "0x12f961f564a5fb12b938d8864b6faf5be3abf10b";
const DAO_CONTRACT_ADDRESS = "0xA7a75b9B0712a7923686C0FC4b04856F1cd0d00E";



async function moralisInit() {
    window.web3 = await Moralis.Web3.enable();
    window.nftContract = new web3.eth.Contract(nftContractAbi, NFT_CONTRACT_ADDRESS);
}



//#########################################################################################


hideElement = (element) => element.style.display = "none";
showElement = (element) => element.style.display = "block";

async function initUser() {
    if (await Moralis.User.current()) {
        hideElement(document.getElementById("login_button"));
        showElement(document.getElementById("logout_button"));
    } else {
        showElement(document.getElementById("login_button"));
        hideElement(document.getElementById("logout_button"));
    }
}

async function login() {
    try {
        // bring up metamask, ask them to sign in
        await Moralis.Web3.authenticate();
        initUser();
    } catch (error) {
        alert("Login Failed")
    }
}

async function logout() {
    await Moralis.User.logOut();
    initUser();
}

async function mintNFT(metadataUrl) {
    // createItem function declared in Qrollectible.sol
    const receipt = await nftContract.methods.createItem(metadataUrl).send({from: ethereum.selectedAddress});
    console.log(receipt);
    
    //return token ID
    return receipt.events.Transfer.returnValues.tokenId;
}

async function createItem(src, id) {

    const nftFile = new Moralis.File("nftFile.txt", {base64: src});
    await nftFile.saveIPFS();


    const nftFilePath = nftFile.ipfs();
    user = await Moralis.User.current();
    const userAddress = user.get('ethAddress');



    // create metadata to store on ipfs
    const metadata = {
        name: id,
        description: id,
        image: src
    };

    const nftFileMetadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify(metadata))});
    await nftFileMetadataFile.saveIPFS();
    const nftFileMetadataFilePath = nftFileMetadataFile.ipfs();


    const nftId = await mintNFT(nftFileMetadataFilePath);

}


document.getElementById("login_button").onclick = login;
document.getElementById("logout_button").onclick = logout;


initUser();
moralisInit();