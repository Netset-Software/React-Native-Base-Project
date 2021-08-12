import { LOCAL_URL } from '../security'
import { Platform } from 'react-native'
export default {
  server: {
    BASE_URL: LOCAL_URL,
  },
  text: {
    guidelinesInfoText: 'These guidelines are based on the best available evidence\nand do not constitute inflexible treatment recommendations.\nDue to the changing body of evidence, this document is not\nintended to be a “standard of care.” Users are solely responsible\nfor any decision made with usage of this App.'
  },

  fonts: {
    BOLD: Platform.OS == 'ios' ? 'AirbnbCerealApp-Bold' : "airbnbCereal-Bold",
    MEDIUM: Platform.OS == 'ios' ? 'AirbnbCerealApp-Medium' : 'airbnbCerealMedium',
  },
  colors: {
    THEME_COLOR: '#314F94',
    WHITE: '#fff',
    PRIMERY: '#567CCD',
    SECONDNARYL: "#A6BDEC",
    GRAY: '#6889D0',
    PrimaryButton: '#01CBAF',
    SecondanryButton: '#B7E6E0',
    btnTextColor: '#A3BAEA',
    DarkGray: '#E7EAED',
    appButton: '#2D98FF',
    appButtonDisable: '#3880D9'
  },
  regex: {
    regExEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    nameRegEx: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
    numericRegEx: /\d/,
    specialCharRegEx: /[^a-zA-Z ]/,
  },
  error: {
    error_internet_connection:
      'Something went wrong!! Please check your internet and try again',
    error_empty_first_name: 'Please enter first name',
    error_first_name_numeric: 'First name cannot have numeric values',
    error_first_name_specialChar: 'First name cannot have special characters',
    error_first_name_long:
      'First name field cannot have more than 100 characters',
    error_empty_lats_name: 'Please enter last name',
    error_last_name_numeric: 'Last name cannot have numeric values',
    error_last_name_specialChar: 'Last name cannot have special characters',
    error_last_name_long:
      'Last name field cannot have more than 100 characters',
    error_empty_email: 'Please enter the email',
    error_invalid_email: 'Please enter a valid email address',
    error_empty_password: 'Please enter password',
    error_empty_confirm_password: 'Please enter confirm password',
    error_password_length: "Password must be greater then 6",
    error_password_not_Match: 'Confirm password not match',
    error_empty_name: 'Please enter full name',
    error_first_numeric: 'Full name cannot have numeric values',
    error_first_specialChar: 'Full name cannot have special characters',
    error_first_long:
      'Full name field cannot have more than 100 characters',
    error_empty_comment: "Please enter comment"
  }
};
