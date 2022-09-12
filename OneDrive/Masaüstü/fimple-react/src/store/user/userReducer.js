import { types } from "../types";
import { userInitialState } from "./userInitialState";

export const userReducer = (state = userInitialState, action) => {
  if (action.type === types.KREDI_TUTARI) {
    return {
      ...state,
      krediTutari: action.payload,
    };
  }
  if (action.type === types.TAKSIT_SAYISI) {
    return {
      ...state,
      taksitSayisi: action.payload,
    };
  }
  if (action.type === types.KAR_ORANI) {
    return {
      ...state,
      karOrani: action.payload,
    };
  }
  if (action.type === types.TAKIT_ARALIGI) {
    return {
      ...state,
      taksitAraligi: action.payload,
    };
  }
  if (action.type === types.VERGI_ORANI) {
    return {
      ...state,
      vergiOrani: action.payload,
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
