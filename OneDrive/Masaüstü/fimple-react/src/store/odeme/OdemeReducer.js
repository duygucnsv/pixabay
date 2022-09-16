import { types } from "../types";
import { OdemeInitialState } from "./OdemeInitialState";
import { useStore } from "../index";

export const OdemeReducer = (state = OdemeInitialState, action) => {
  const { userState } = useStore();
  const { krediTutari, karOrani, taksitAraligi } = userState;

  if (action.type === types.SET_AYLİK) {
    return {
      ...state,
      odeme: (krediTutari * karOrani * taksitAraligi) / 1200 + (krediTutari/ taksitAraligi),
    };
  }
  if (action.type === types.SET_HAFTALİK) {
    return {
      ...state,
      odeme:
        (krediTutari * karOrani * taksitAraligi) / 4800 +
        (krediTutari / taksitAraligi),
    };
  }
  if (action.type === types.SET_YİLLİK) {
    return {
      ...state,
      odeme:
        (krediTutari * karOrani * taksitAraligi) / 100 +
        (krediTutari / taksitAraligi),
    };
  }
  if (action.type === types.SET_BSMV) {
    return {
      ...state,
      odeme: (state.odeme - krediTutari) * 0.05,
    };
  }
  if (action.type === types.SET_KKDF) {
    return {
      ...state,
      odeme: (state.odeme - krediTutari) * 0.15,
    };
  }

  /*   if (action.type === types.EKLE) {
    return {
      ...state,
      liste: [
        ...state.liste,
        {
          id: state.liste.length + 1,
          baslik: action.payload,
          tamamlandi: false,
        },
      ],
    };
  }

  if (action.type === types.ISARETLE) {
    return {
      ...state,
      liste: state.liste.map((item) =>
        item.id === action.payload
          ? { ...item, tamamlandi: !item.tamamlandi }
          : item
      ),
    };
  }
  if (action.type === types.TEMIZLE) {
    return {
      ...state,
      liste: state.liste.filter((item) => item.tamamlandi === false),
    };
  } */
};
