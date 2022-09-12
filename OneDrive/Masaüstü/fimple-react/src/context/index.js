import { createContext, useContext, useReducer } from "react";
import { userInitialState } from "./kullanıcıGridileri/userInitialState";
import { userReducer } from "./kullanıcıGridileri/userReducer";


const FimpleContext = createContext();

export const useStore = () => useContext(FimpleContext);

export const FimpleContextProvider = ({ children }) => {

    const [userState, dispatchUser] = useReducer(userReducer, userInitialState);



  return (
    <FimpleContext.Provider value={{ userState, dispatchUser }}>
      {children}
    </FimpleContext.Provider>
  );
};
