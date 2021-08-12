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
    ScrollView
} from 'react-native';
import Config from '../../utils/Config';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { getIcons, Icons } from '../../assets/Icons';


interface Props {
    onClick: () => void
    title: string
    isBackButton: boolean
    onBackPress: () => void
}

const GuidLineHeader = ({ onClick, title, onBackPress }: Props) => {
    return (
        <View style={styles.headerView}>
            <View style={styles.titleView}>
                <Text style={styles.text}>{title}</Text>
                <TouchableOpacity style={styles.button} onPress={onBackPress}>
                    {
                        getIcons(Icons.BACK_ICON, scale(17))
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.reStartButton} onPress={onClick}>
                    <Text style={[styles.text, { fontSize: scale(12) }]}>{"Restart"}</Text>
                </TouchableOpacity>
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
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Config.colors.WHITE,
        fontFamily: Config.fonts.BOLD,
        fontSize: scale(15)
    },
    bottomLine: {
        width: '100%',
        backgroundColor: Config.colors.GRAY,
        height: scale(1)

    },
    button: {
        position: 'absolute',
        left: scale(15),
    },
    reStartButton: {
        position: 'absolute',
        right: scale(15),
    }
})

export default GuidLineHeader;
