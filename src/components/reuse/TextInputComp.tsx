import React from 'react';
import {
  ViewStyle,
  StyleProp,
  TextInput,
  KeyboardTypeOptions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Config from '../../utils/Config';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { getIcons, Icons } from '../../assets/Icons';
import { EmailIcon } from '../../assets'


interface Props {
  value: string | undefined;
  editable?: boolean;
  placeholder: string;
  style?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
  getInputRef?: (ref: TextInput | null) => void;
  onSubmitEditing?: () => void;
  returnKeyType?: 'none' | 'done' | 'next';
  validationMessage?: string;
  multiline?: boolean;
  text?: string;
  is_icon?: boolean
  userData?: any
  onPressEdit?: (text: string) => void;
  IconName?: any
  textStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  bottomLineStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ViewStyle>;
}

const TextInputComp = ({
  value,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry = false,
  autoCapitalize,
  maxLength,
  style,
  editable = true,
  getInputRef,
  onSubmitEditing,
  returnKeyType,
  validationMessage,
  multiline,
  text,
  is_icon,
  userData,
  onPressEdit,
  IconName,
  textStyle,
  containerStyle,
  bottomLineStyle,
  iconStyle
}: Props) => {
  return (
    <View
      style={[styles.mainContainer, containerStyle]}>
      <Text style={[styles.textHeading, textStyle]}>{text}</Text>
      <View style={[
        {
          height: verticalScale(20),
          borderWidth: validationMessage ? 1 : 0,
          // borderBottomColor: validationMessage ? 'red' : null,
          borderColor: 'white',
          paddingLeft: scale(15),
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: 'red'
          // ...(!editable && { backgroundColor: 'white' }),
        },
        style,
      ]}>
        <TouchableOpacity
          // onPress={userData ? onPressEdit : null}
          // hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
          style={[iconStyle, { marginRight: scale(5) }]}
        >
          {IconName}
        </TouchableOpacity>
        <TextInput
          value={value}
          maxLength={maxLength}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={secureTextEntry}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          editable={editable}
          placeholderTextColor={"black"}
          style={[
            {
              color: "black",
              fontSize: scale(12),
              width: "100%",
              height: scale(45),
              marginLeft: scale(10),
              fontFamily: Config.fonts.MEDIUM
            },
            style,
          ]}
          returnKeyType={returnKeyType}
          placeholder={placeholder}
          textContentType="telephoneNumber"
          ref={(ref) => {
            if (getInputRef) getInputRef(ref);
          }}
        />
      </View>

      <View style={[styles.bottomLine, bottomLineStyle, { backgroundColor: validationMessage ? 'red' : Config.colors.DarkGray, }]}></View>
      {validationMessage && (
        <Text
          style={styles.text}>
          {validationMessage}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    width: '100%',
    // paddingStart: 25,
    // marginTop: moderateScale(10),
    backgroundColor: 'white'

  },
  text: {
    marginTop: scale(4),
    marginLeft: scale(48),
    color: 'red',
    fontSize: scale(11),
    // fontFamily: Config.fonts.REGULAR,
  },
  textHeading: {
    color: Config.colors.btnTextColor,
    fontFamily: Config.fonts.MEDIUM,
    fontSize: scale(9),
    marginLeft: Platform.OS == "ios" ? scale(48) : scale(52),
    marginTop: scale(15)

  },
  iconStyle: {
    backgroundColor: Config.colors.PrimaryButton,
    height: moderateScale(30),
    width: moderateScale(30),
    position: "absolute",
    right: moderateScale(10),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomLine: {
    width: '81%',
    backgroundColor: Config.colors.DarkGray,
    height: scale(1),
    alignSelf: 'flex-end',
    marginTop: scale(15),
    marginRight: scale(15)

  }
})

export default TextInputComp
