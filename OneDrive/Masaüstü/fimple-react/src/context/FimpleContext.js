import React, { createContext ,useContext, useState} from "react";

export const FimpleContext = createContext();

export const useStore = () => useContext(FimpleContext);


export const FimpleContextProvider = ({children}) => {
 
 const [anapara, setAnapara] = useState(0);
 const [taksitSayisi, setTaksitSayisi] = useState(0);
 const [karOrani, setKarOrani] = useState(0);
 const [taksitAraligiSecimi, setTaksitAraligiSecimi] = useState(0);
 const [vergiOrani, setvergiOrani] = useState(0);

 const state = {
   anapara,
   setAnapara,
   taksitSayisi,
   setTaksitSayisi,
   karOrani,
   setKarOrani,
   taksitAraligiSecimi,
   setTaksitAraligiSecimi,
   vergiOrani,
   setvergiOrani,
 };


  
  return <FimpleContext.Provider value={state}>{children}</FimpleContext.Provider>;

};

