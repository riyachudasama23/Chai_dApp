import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState({ //initialize state object with object
    provider: null,
    signer:null,
    contract:null
  })

  const [account,setAccount] = useState('Not Connected');

  useEffect(()=>{                         //automatically fetch contract instance , don't heve to click any button
    const template=async()=>{
      const contractAddress="";
      const contractABI="";

      /*
        Metamask part
        1.in order to do transaction on georli testnet
        2.metamask consists of infura api which helps in connecting with blockchain
      */
      
      try{
        const {ethereum} = window; //metamask will inject ethereum object inside our window

        const account = await ethereum.request({  //metamask will automatically open when someone visit our site
          method:"eth_requestAccounts"
        })
        /*is used to request access to the user's Ethereum accounts through MetaMask. This method prompts the user to connect their account if they haven't already. */

        setAccount(account);

        //ether.js library

        const provider = new ethers.providers.Web3Provider(ethereum); //read BC
        const signer = provider.getSigner(); //write the BC
      }
      catch(error){
        console.log(error);
      }
    }
    template();
  })

  return (
    <>
      
        
    </>
  )
}

export default App
