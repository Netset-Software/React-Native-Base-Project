import Snackbar from 'react-native-snackbar';
import React from 'react'
import Config from '../../../utils/Config';

const ShowToast = (text) => {
  return (
    Snackbar.show({
      text: text,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: Config.colors.appButton,
      textColor: "white",
      fontFamily: Config.fonts.MEDIUM
    })
  )
}

export default ShowToast