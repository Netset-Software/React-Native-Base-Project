import { Dispatch } from 'redux';
import { setLoading } from '../creators/LoadingCreator';
import {
  storeUserDetails,
  setAccessToken,
  clearAll,
} from '../creators/AuthCreators';
import { AppActionTypes } from '../types';
import {
  executePostRequest,
  executeGetRequest,
  executePutRequest,
  executeDeleteRequest,
} from '../../utils/FetchUtils';
import {
  Login,
  Signup,
  User
} from '../../types/modals/User';
import { RootState } from '../reducers';
import { Platform } from 'react-native';
import { Log } from '../../utils/Logger';
import { showAlert } from '../../utils/AlertHelper'
import {
  SignUpType,
  validateLogin,
  validateSignUp,
  ChangePasswordType,
  validateChangePassowrd,
  UpdateProfileType,
  validateProfile,
  FeedbackType,
  validateFeedback,
  ForgotPasswordType,
  validateForgotPassword
} from '../../utils/ValidationHelper'


/**
 * login api 
 * @param data email and password
 * @returns validation errors and backend massegaes
 */

export const LoginAction = (data: Login) => {
  return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
    const validationResult: any = await validateLogin(data); // validate feilds 
    if (validationResult.code == 405) {
      return validationResult;
    } else {
      dispatch(setLoading(true));
      const result: any = await executePostRequest(
        'api/v1/users/login',
        JSON.stringify(data)
      );
      if (result.code == 200) {
        console.log("user====>", result?.response?.user)
        dispatch(setAccessToken(result?.response?.access_token)) //store user's information
        dispatch(storeUserDetails(result?.response?.user))
      } else {
        dispatch(setLoading(false));
      }
      console.log(result, "login")
      return result

    }

  };
};

/**
 * API for create new account
 * @param data emai,password,first name and lastname
 * @returns validation errors and backend massegaes
 */

export const SignuUpAction = (data: SignUpType) => {
  let Data = {
    email: data.email,
    password: data.password,
    first_name: data.fname,
    last_name: data.lname,
    device_type: "",
    device_id: '',
    role: 'App'
  }
  return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
    const token = getState().persistedReducer.token;
    const validationResult: any = await validateSignUp(data);
    if (validationResult.code == 405) {
      return validationResult;
    }
    else {
      dispatch(setLoading(true));
      const result: any = await executePostRequest(
        'api/v1/users/',
        JSON.stringify(Data)
      );
      if (result.code == 200) {
        dispatch(setAccessToken(result?.response?.access_token)) //store user's infromation 
        dispatch(storeUserDetails(result?.response?.user))
      }
      else {
        dispatch(setLoading(false));
      }
      return result
    }
  };
};

/**
 * API fro change password
 * @param data old password , new password and confirm password 
 * @returns validation and success messages
 */

export const ChangePasswordAction = (data: ChangePasswordType) => {
  let Data = {
    old_password: data.old_password,
    new_password: data.new_password,
  }
  return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
    const token = getState().persistedReducer.token;
    const validationResult: any = await validateChangePassowrd(data);
    if (validationResult.code == 405) {
      return validationResult;
    }
    else {
      dispatch(setLoading(true));
      const result: any = await executePostRequest(
        'api/v1/users/changepassword',
        JSON.stringify(Data),
        token
      );
      dispatch(setLoading(false));
      return result
    }
  };
};

/**
 * logout API
 * @returns success message and error message
 */

export const LogoutAction = () => {
  return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
    const token = getState().persistedReducer.token;
    const t = token
    dispatch(clearAll()) //clear all data from redux local storage
    const result: any = await executeGetRequest(
      'api/v1/users/logout_user',
      t//tocken 
    );
    if (result.code == 200) {
      dispatch(clearAll()) //clear all data from redux local storage
    }
    return result
  };
};



/**
 * Update profile API , update first name and last name 
 * @param data first name and last name
 * @returns 
 */
export const UpdateProfileAction = (data: UpdateProfileType) => {

  return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
    const token = getState().persistedReducer.token;
    const validationResult: any = await validateProfile(data);
    if (validationResult.code == 405) {
      return validationResult;
    }
    else {
      dispatch(setLoading(true));
      const result: any = await executePutRequest(
        'api/v1/users/',
        JSON.stringify(data),
        token
      );
      if (result.code == 200) {
        dispatch(storeUserDetails(result?.response?.user)) // store updated user data 
      }
      dispatch(setLoading(false));
      return result
    }
  };
};


/**
 * Api for submit feedback form
 * @param data fullname , email , comment , feedback related to , submit type , need to respond
 * @returns 
 */
export const FeedbackAction = (data: FeedbackType) => {
  return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
    const token = getState().persistedReducer.token;
    console.log(token);

    const validationResult: any = await validateFeedback(data);
    if (validationResult.code == 405) {
      return validationResult;
    }
    else {
      dispatch(setLoading(true));
      const result: any = await executePostRequest(
        'api/v1/feedback/',
        JSON.stringify(data),
        token
      );
      console.log("FeedBack====>", result);
      dispatch(setLoading(false));
      return result
    }
  };
};



export const ForgotPasswordAction = (data: ForgotPasswordType) => {

  return async (dispatch: Dispatch<AppActionTypes>, getState: () => RootState,) => {
    const token = getState().persistedReducer.token;
    const validationResult: any = await validateForgotPassword(data);
    if (validationResult.code == 405) {
      return validationResult;
    }
    else {
      dispatch(setLoading(true));
      const result: any = await executePutRequest(
        'api/v1/users/forgot_password',
        JSON.stringify(data),
        token
      );
      dispatch(setLoading(false));
      return result
    }
  };
};