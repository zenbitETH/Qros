import React from "react";
//import { Contract } from "@ethersproject/contracts";
//import { getDefaultProvider } from "@ethersproject/providers";
import { useMoralis } from "react-moralis";
import logo from './assets/logo.png';
import Moralis from "moralis";
import Web3 from "web3";
import {tokenContractAbi} from './abi.js';
import {marketplaceAbi} from './abi.js';


//import { addresses, abis } from "@project/contracts";
import Profile from "./components/Profile";
import Citizens from './components/Citizens';
import Academy from './components/Academy';
import Culture from './components/Culture';
import Economy from './components/Economy';

import StarterF from "./assets/Citizen F Lv1.png";
import StarterM from "./assets/Citizen M Lv1.png"
import BGLV1 from "./assets/BG Citizen Lv2.png"
import AccesoryLv3 from "./assets/Ac Citizen Lv3.png"


const appId = "TOYUgAQy6p6Sx3uKprDKcRRjU7AXF7DFxdSNlR2y";
const serverUrl = "https://2tmlqxwkknpp.moralishost.com:2053/server";

const TOKEN_CONTRACT_ADDRESS = "0x34480e1169E9D78F39eDFD6D8293d8A348e144a4";  
const MARKETPLACE_CONTRACT_ADDRESS = "0x4C454aF41F77DDf442F1BA8C1E9D65D2D6F04e4f";    
const ERC20_TOKEN_CONTRACT_ADDRESS = "0x12f961f564a5fb12b938d8864b6faf5be3abf10b";
const DAO_CONTRACT_ADDRESS = "0xA7a75b9B0712a7923686C0FC4b04856F1cd0d00E";

//const mintNFT = async(name, descr,filepath) => {
//
//  const web3 =  await Moralis.Web3.enable();
//  const tokenContract = new web3.eth.Contract(tokenContractAbi, TOKEN_CONTRACT_ADDRESS);
//  const marketplaceContract = new web3.eth.Contract(marketplaceAbi,//MARKETPLACE_CONTRACT_ADDRESS);
//  const user = await Moralis.User.current();
//  const userAddress = user.get('ethAddress');
//
//  const metadata = {
//    name: name,
//    description: descr,
//    image: filepath
////};
//
//const nftFileMetadataFile = new Moralis.File("metadata.json", {base64 : btoa(JSON.stringify//(metadata))});
//
//nftFileMetadataFile.saveIPFS();
//
//const metadataUrl = nftFileMetadataFile.ipfs();
//
//  const receipt = await tokenContract.methods.createItem(metadataUrl).send({from: //userAddress});
//  console.log(receipt);
//  
//  //return token ID
//  return receipt.events.Transfer.returnValues.tokenId;
//}
//
function App() {
  //const { loading, error, data } = useQuery(GET_TRANSFERS);

  
 
  function BtnConnect() {
  const {authenticate, isAuthenticated, logout} = useMoralis();

  if(isAuthenticated){
    return(
    <div class="wallet-button">
      <div onClick={() => logout()}>Logout</div>
    </div>
    );
  }
  return ( 
  <div onClick={() => authenticate()} class="wallet-button">Connect Wallet</div>
  );
  }

//needs to be called on page load
const Moralis = require('moralis');

 function init(){
   const web3 =  Moralis.web3.enable;
    //window.web3 = await Moralis.Web3.enable();
    window.tokenContract = new Web3.eth.Contract(tokenContractAbi, TOKEN_CONTRACT_ADDRESS);
    window.marketplaceContract = new Web3.eth.Contract(marketplaceAbi, MARKETPLACE_CONTRACT_ADDRESS);
  }

 // React.useEffect(() => {
 //   if (!loading && !error && data && data.transfers) {
 //     console.log({ transfers: data.transfers });
 //   }
 // }, [loading, error, data]);


  return (

    
  <div class="App" >
	
	<nav class="nav">
    <div className="logo">
      <img src={logo} alt="Qros" />
    </div>
    <div className="right">
      
    </div>
		<ul class="nav_list">
			<li class="nav_item"><BtnConnect class="wallet-button"/></li>
		</ul>
	</nav>
	
	<div class="hero">
	  <div class="center"><Profile/></div>
	</div>
	
	<div class="subnav">
		<div class="subnav_container">
			<div class="subnav_title">
			  <span class="center">Rewards Querétaro City DAO</span>
			</div>
		</div>
	</div>

	<section>
  <div class="card__collection clear-fix">
  <h1>Citizens</h1>
  <div class="cards cards--three">
  <img src={StarterF} class="img-responsive" alt="Cards Image"/>
    <span class="cards--three__rect-1">
      <span class="shadow-1"></span>
      <div class="traitdes">Get 1000 TARO Tokens</div>
      <div class="center">
        <div class="mint-button">Mint </div>
      </div>
    </span>
    <span class="cards--three__rect-2">
      <span class="shadow-2"></span>
    </span>
    <span class="cards--three__circle"></span>
    <ul class="cards--three__list">
      <li><i >Lv1</i></li>
    </ul>
  </div>

  <div class="cards cards--three">
  <img src={StarterM} class="img-responsive" alt="Cards Image"/>
    <span class="cards--three__rect-1">
      <span class="shadow-1"></span>
      <div class="traitdes">Get 1000 TARO Tokens</div>
      <div class="center">
        <div class="mint-button">Mint </div>
      </div>
    </span>
    
    <span class="cards--three__rect-2">
      <span class="shadow-2"></span>
    </span>
    <span class="cards--three__circle"></span>
    <ul class="cards--three__list">
      <li><i >Lv1</i></li>
    </ul>
  </div>

  <div class="cards cards--three">
  <img src={BGLV1} class="img-responsive" alt="Cards Image"/>
    <span class="cards--three__rect-1">
      <span class="shadow-1"></span>
      <div class="traitdes">Get 2000 TARO Tokens</div>
      <div class="center">
        <div class="mint-button">Mint </div>
      </div>
    </span>
    <span class="cards--three__rect-2">
      <span class="shadow-2"></span>
    </span>
    <span class="cards--three__circle"></span>
    <ul class="cards--three__list">
      <li><i >Lv2</i></li>
    </ul>
  </div>

  <div class="cards cards--three">
  <img src={AccesoryLv3} class="img-responsive" alt="Cards Image"/>
    <span class="cards--three__rect-1">
      <span class="shadow-1"></span>
      <div class="traitdes">Get 3000 TARO Tokens</div>
      <div class="center">
        <div class="mint-button">Mint </div>
      </div>
    </span>
    <span class="cards--three__rect-2">
      <span class="shadow-2"></span>
    </span>
    <span class="cards--three__circle"></span>
    <ul class="cards--three__list">
      <li><i >Lv3</i></li>
    </ul>
  </div>
</div>
  <Culture/>
  <Academy/>
  <Economy/>
	</section>
	
	<footer>
		
	</footer>
</div>
      
    
  );
}

export default App;
