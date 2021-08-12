import {
  AuthActionType,
  CLEAR_ALL,
  SET_USER_NUMBER,
  SET_USER_INFO,
  GET_TOKEN,
  UPDATE_PROFILE,
  SET_DRUG,
  SET_PROCEDURE,
  SET_PROCEDURE_FAV_LIST,
  SET_DRUG_FAV_LIST,
  STORE_ALL_PDF,
  UPDATE_DRUG_FAV,
  UPDATE_PROCEDURE_FAV
} from '../types';
import { User } from '../../types/modals/User';
const INITIAL_STATE = {
  token: undefined,
  preference: undefined,
  userNumber: undefined,
  DrugList: undefined,
  Procedure: undefined,
  DrugFavList: undefined,
  ProcedureFavList: undefined,
  AllPdf: undefined
};
export default (state = INITIAL_STATE, action: AuthActionType) => {
  switch (action.type) {
    case CLEAR_ALL:
      return { ...state, token: undefined, preference: undefined, DrugList: undefined, Procedure: undefined, AllPdf: undefined, ProcedureFavList: undefined, DrugFavList: undefined };
    // return INITIAL_STATE;
    case SET_USER_NUMBER:
      return { ...state, userNumber: action.payload.userNumber };
    case SET_USER_INFO:
      return { ...state, preference: action.payload };
    case GET_TOKEN:
      return { ...state, token: action.payload };
    case SET_DRUG:
      return { ...state, DrugList: action.payload };
    case SET_PROCEDURE:
      return { ...state, Procedure: action.payload };
    case UPDATE_PROCEDURE_FAV:
      return {
        ...state,
        ProcedureFavList: { ...action.payload },
      };
    case UPDATE_DRUG_FAV: {
      let arr = state.DrugFavList
      arr.push({ drug: action.payload })
      // console.log("DrugFav===>", arr, action.payload);

      return {
        ...state,
        DrugFavList: arr,
      };
    }
    case SET_DRUG_FAV_LIST:
      return { ...state, DrugFavList: action.payload };
    case SET_PROCEDURE_FAV_LIST:
      return { ...state, ProcedureFavList: action.payload };
    case STORE_ALL_PDF:
      return { ...state, AllPdf: action.payload };
    default:
      return state;
  }
};
