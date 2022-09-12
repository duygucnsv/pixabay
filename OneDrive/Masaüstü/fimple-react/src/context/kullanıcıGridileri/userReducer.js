import { types } from "../types";
import { userInitialState } from "./userInitialState";

export const userReducer = (state = userInitialState, action) => {
  if (action.type === types.SET_ANA_PARA) {
    return {
      ...state,

      user: [
        ...state.user,
        {
          anapara: action.payload,
        },
      ],
    };
  } else if (action.type === types.SET_VADE) {
    return {
      ...state,
      vade: action.payload,
    };
  } else if (action.type === types.SET_KAR) {
    return {
      ...state,
      vade: action.payload,
    };
  } else if (action.type === types.SET_VERGI) {
    return {
      ...state,
      vergi: action.payload,
    };
  } else if (action.type === types.SET_HESAPLA) {
    return {
      ...state,
      user: [
        ...state.user,
        {
          anapara: action.payload,
        },
      ],
    };
  }
};
