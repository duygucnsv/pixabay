import { types } from "../types";
export const setKrediTutari = (value) => {
  return {
    type: types.KREDI_TUTARI,
    payload: value,
  };
};
export const setTaksitSayisi = (value) => {
  return {
    type: types.TAKSIT_SAYISI,
    payload: value,
  };
};
export const setKarOrani = (value) => {
  return {
    type: types.KAR_ORANI,
    payload: value,
  };
};
export const setTaksitAraligi = (value) => {
  return {
    type: types.TAKIT_ARALIGI,
    payload: value,
  };
};
export const setVergiOrani = (value) => {
  return {
    type: types.VERGI_ORANI,
    payload: value,
  };
};
