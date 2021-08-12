import React from "react";
import {
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
  Linking,
} from "react-native";
import Config from "./Config";
import { Log } from "./Logger";
import { showAlert } from "./AlertHelper";
import { capitalize } from "lodash";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

/** Round-Off Single Digit to Double Digit Number */
const getRoundedDigit = (num: number): string => {
  return String("0" + num).slice(-2);
};

/** Normalize size for different screen sizes */
const normalize = (size: number): number => {
  const scale = screenWidth / 320;
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};




export {
  screenHeight,
  screenWidth,
  normalize,
};
