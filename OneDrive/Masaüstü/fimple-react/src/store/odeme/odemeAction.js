import { types } from "../types";
export const setHaftalik = (value) => {
  return {
    type: types.SET_HAFTALİK,
    payload: value,
  };
};
export const setAyli̇k = (value) => {
  return {
    type: types.SET_AYLİK,
    payload: value,
  };
};
export const setYillik = (value) => {
  return {
    type: types.SET_YİLLİK,
    payload: value,
  };
};
export const setBSMV = (value) => {
  return {
    type: types.SET_BSMV,
    payload: value,
  };
};
export const setKKDF = (value) => {
  return {
    type: types.SET_KKDF,
    payload: value,
  };
};
