import { types } from "../types";

export const setAnaPara = (anapara) => ({
  type: types.SET_ANA_PARA,
  payload: anapara,
});

export const setVade = (vade) => ({
  type: types.SET_VADE,
  payload: vade,
});

export const setKarOrani = (kar) => ({
  type: types.SET_KAR,
  payload: kar,
});

export const setVergiOrani = (vergi) => ({
  type: types.SET_VERGI,
  payload: vergi,
});

export const setHesapla = (hesapla) => ({
  type: types.SET_HESAPLA,
  payload: hesapla,
});
