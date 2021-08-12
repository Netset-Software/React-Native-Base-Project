/**
 * Component to display splash screen and handle
 * actions required at the start of the application
 */

import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";
import splashScreen from "react-native-splash-screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../../../types/AuthParamList";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import HOC from '../../HOC'
import Config from '../../../utils/Config'
import { GetAllDrugsAction } from '../../../redux/actions/UserAction'
import { useDispatch } from 'react-redux'

const SplashScreen = () => {

  type SplashScreen = StackNavigationProp<AuthParamList, "SplashScreen">;
  const navigation = useNavigation<SplashScreen>();
  const userToken = useSelector((state: RootState) => state.persistedReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    //for hide spleshscreen and then go to socialLogin screen
    setTimeout(() => {
      splashScreen.hide();
      if (userToken) {
        dispatch(GetAllDrugsAction())
        navigation.reset({
          index: 0,
          routes: [{ name: "HomeScreen" }],
        })
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: "LoginScreen" }],
        });
      }
    }, 1000);
  }, []);

  return (
    <View>
    </View>
  );
};

export default HOC(SplashScreen);
