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
} from 'react-native';
import Config from '../../utils/Config';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { getIcons, Icons } from '../../assets/Icons';
import { normalize } from '../../utils/Helpers';


interface Props {
    onClick?: () => void
    title: string
    isBackButton: boolean
}

const Header = ({ onClick, title, isBackButton, }: Props) => {
    return (
        <View style={styles.headerView}>
            <View style={styles.titleView}>
                <Text style={styles.text}>{title}</Text>
                {isBackButton && <TouchableOpacity style={styles.button} onPress={onClick}>
                    {
                        getIcons(Icons.BACK_ICON, scale(17))
                    }
                </TouchableOpacity>}
            </View>
            <View style={styles.bottomLine}></View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        backgroundColor: "transparent",
        alignItems: 'center',
        width: '100%'
    },
    titleView: {
        width: '100%',
        height: verticalScale(40),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Config.colors.WHITE,
        fontFamily: Config.fonts.BOLD,
        fontSize: normalize(15)
    },
    bottomLine: {
        width: '100%',
        backgroundColor: Config.colors.GRAY,
        height: verticalScale(1)

    },
    button: {
        position: 'absolute',
        left: scale(15),
    }
})

export default Header;
