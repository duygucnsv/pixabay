import React, { useReducer } from "react";

import { userEntriesReducer } from "./userEntries/userEntriesReducer";
import { userEntriesInitialState } from "./userEntries/userEntriesInitialState";
import { OdemeReducer } from "./odeme/OdemeReducer";
import { OdemeInitialState } from "./odeme/OdemeInitialState";

const Store = React.createContext();
Store.displayName = "Store";

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children }) => {
  const [userEntriesState, dispatchUserEntries] = useReducer(
    userEntriesReducer,
    userEntriesInitialState
  );
  const [odemeState, dispatchOdeme] = useReducer(
    OdemeReducer,
    OdemeInitialState
  );

  return (
    <Store.Provider
      value={{
        userEntriesState,
        dispatchUserEntries,
        odemeState,
        dispatchOdeme,
      }}
    >
      {children}
    </Store.Provider>
  );
};
