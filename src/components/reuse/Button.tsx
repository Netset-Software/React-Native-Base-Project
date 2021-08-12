import { Dimensions, Text, TouchableOpacity, View } from 'react-native';

import Config from '../../utils/Config';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';


const width = Dimensions.get('window').width;

const Button = ({
    text,
    onPress,
    type = 'filled',
    bordered = false,
    size = 'large',
    backgroundColor,
    style,
    textStyle,
}) => {
    const large = width / 1.3;
    const small = width / 4;

    const btnSize = size === 'large' ? large : small;
    const btnBgColor = type === 'filled' ? '#3f51b5' : 'transparent';
    const btnTextColor = type === 'filled' ? '#ffffff' : '#6371c2';
    const btnBorderRadius = bordered ? 30 : 8;

    const containerCommonStyle = {
        backgroundColor: backgroundColor || Config.colors.appButton,
        borderRadius: btnBorderRadius,
        alignItem: 'center',
        justifyContent: 'center',
        width: '93%',
        padding: scale(8),
        elevation: 6,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: Config.colors.THEME_COLOR,
        shadowOpacity: 4,
        borderColor: Config.colors.appButton,
        height: verticalScale(50)
        // paddingTop: 6,
        // paddingBottom: 3,
    };

    const textCommonStyle = {
        color: btnTextColor,
        fontSize: scale(14),
        textAlign: 'center',
        fontFamily: Config.fonts.BOLD,
        textStyle,
    };

    const border = type === 'outlined' && {
        borderColor: '#e7e7e7',
        borderWidth: 2,
    };

    return (
        <View style={[containerCommonStyle, border, style]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                <Text style={[textCommonStyle, textStyle]}> {text} </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;
