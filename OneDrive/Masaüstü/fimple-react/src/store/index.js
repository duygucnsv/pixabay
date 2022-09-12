import React, { useReducer } from "react";

import { userReducer } from "./user/userReducer";
import { userInitialState } from "./user/userInitialState";
import { OdemeReducer } from "./odeme/OdemeReducer";
import { OdemeInitialState } from "./odeme/OdemeInitialState";

const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(userReducer, userInitialState);
  const [odemeState, dispatchOdeme] = useReducer(
    OdemeReducer,
    OdemeInitialState
  );

  return (
    <Store.Provider
      value={{ userState, dispatchUser, odemeState, dispatchOdeme }}
    >
      {children}
    </Store.Provider>
  );
};
