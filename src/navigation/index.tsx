import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  AuthParamList,
  InnerStackParamList,
} from '../types/AuthParamList';
import { StyleSheet, View, ImageBackground } from 'react-native';
import {
  SplashScreen,
  HomeScreen,
  LoginScreen,
  SignupScreen,
  ForgotPassword,
  InfoScreen,
  SearchByDrugScreen,
  SearchByProcedureScreen,
  FeedbackScreen,
  GuidelinesScreen,
  SettingScreen,
  ProfileScreen,
  ChangePasswordScreen
} from '../components/screens';
import Animated from 'react-native-reanimated';
import { screenHeight, screenWidth } from '../utils/Helpers';
import { navigationRef } from './RootNavigation'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// const Stack = createStackNavigator<AuthParamList>();

const Stack = createSharedElementStackNavigator();
// const options = {
//   headerBackTitleVisible: false,
//   cardStyleInterpolator: ({ current: { progress } }) => {
//     return {
//       cardStyle: {
//         opacity: progress
//       }
//     };
//   }
// };
const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator mode="modal">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />

        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        {/* <Stack.Screen
          name="SearchByDrugScreen"
          component={SearchByDrugScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        /> */}
        <Stack.Screen
          name="SearchByDrugScreen"
          component={SearchByDrugScreen}
          options={{
            headerShown: false,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 300 } },
              close: { animation: 'timing', config: { duration: 200 } },
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="SearchByProcedureScreen"
          component={SearchByProcedureScreen}
          options={{
            headerShown: false,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 300 } },
              close: { animation: 'timing', config: { duration: 200 } },
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        {/* <Stack.Screen
          name="SearchByProcedureScreen"
          component={SearchByProcedureScreen}
          // mode="modal"
          options={{
            headerShown: false,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 300 } },
              close: { animation: 'timing', config: { duration: 300 } },
            },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        /> */}

        <Stack.Screen
          name="GuidelinesScreen"
          component={GuidelinesScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />

        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{
            headerShown: false,
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [screenWidth, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}
        />
      </Stack.Navigator>

    </NavigationContainer >
  );
};

export default Routes;
