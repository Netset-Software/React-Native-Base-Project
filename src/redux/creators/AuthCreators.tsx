import {
  AuthActionType,
  SET_USER_NUMBER,
  SET_USER_LOCATION,
  SET_USER_INFO,
  CLEAR_ALL,
  GET_TOKEN,
  GET_CONTACTS,
  GET_CATEGORIES,
  GET_FAV_CONTACTS,
  SET_DRUG,
  SET_PROCEDURE,
  SET_DRUG_FAV_LIST,
  SET_PROCEDURE_FAV_LIST,
  STORE_ALL_PDF,
  UPDATE_DRUG_FAV,
  UPDATE_PROCEDURE_FAV
} from '../types';
import { Log } from '../../utils/Logger';

export function setUserNumber(userNumber: number): AuthActionType {
  return {
    type: SET_USER_NUMBER,
    payload: {
      userNumber: userNumber,
    },
  };
}
export function storeUserDetails(userInfo: Object): AuthActionType {
  return {
    type: SET_USER_INFO,
    payload: {
      preference: userInfo,
    },
  };
}


export function setAccessToken(token: string): AuthActionType {
  Log(token, 'token');
  return {
    type: GET_TOKEN,
    payload: token,
  };
}
export function clearAll(): AuthActionType {
  return {
    type: CLEAR_ALL,
    payload: {
      token: undefined,
    },
  };
}
export function storeDrugs(drug) {
  return {
    type: SET_DRUG,
    payload: drug
  };
}

export function storeProcedure(Procedure) {
  return {
    type: SET_PROCEDURE,
    payload: Procedure,
  };
}

export function storeFavProcedure(Procedure) {
  return {
    type: SET_PROCEDURE_FAV_LIST,
    payload: Procedure,
  };
}
export function storeFavDrug(Drug) {
  return {
    type: SET_DRUG_FAV_LIST,
    payload: Drug,
  };
}


export function storeGuideLinesAndChecklistPdf(Drug) {
  return {
    type: STORE_ALL_PDF,
    payload: Drug,
  };
}

export function UpdateFavDrug(Drug) {
  return {
    type: UPDATE_DRUG_FAV,
    payload: Drug,
  };
}

export function UpdateFavProcedure(Procedure) {
  return {
    type: UPDATE_PROCEDURE_FAV,
    payload: Procedure,
  };
}


