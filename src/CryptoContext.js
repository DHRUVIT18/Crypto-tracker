import React from 'react'
import {useState,useEffect} from "react";
const Crypto = React.createContext()

const CryptoContext = ({children}) => {

    const [currency, setcurrency] = useState("INR")
    const [symbol, setsymbol] = useState("₹")


    useEffect(() => {
    if(currency==="INR") setsymbol("₹");
    if(currency==="USD") setsymbol("$");
    
    }, [currency])//last parameter is dependency
    




  return (
    <Crypto.Provider value={{currency,symbol,setcurrency}}>
        {children}

    </Crypto.Provider>
  )
}

export default CryptoContext

export const CryptoState=()=>{
  return   React.useContext(Crypto);
};