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
    Image
} from 'react-native';
import Config from '../../utils/Config';
import { scale, verticalScale } from 'react-native-size-matters';
import { getIcons, Icons } from '../../assets/Icons';


interface Props {
    onClick?: () => void
    isBackButton?: boolean
    onSettingClick?: () => void
    onProfileClick?: () => void
}

const HomeHeader = ({ onClick, isBackButton, onSettingClick, onProfileClick }: Props) => {
    return (
        <View style={styles.headerView}>
            <View style={styles.titleView}>
                <View style={styles.options}>
                    <TouchableOpacity style={{}} onPress={onClick}>
                        <Text style={styles.text}>Give Feedback</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onProfileClick} >
                        <Image
                            source={require("../../assets/Images/user2.png")}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{}} onPress={onSettingClick} >
                        <Image
                            source={require("../../assets/Images/settings.png")}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </TouchableOpacity>

                </View>

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
        fontSize: scale(15)
    },
    bottomLine: {
        width: '100%',
        backgroundColor: Config.colors.GRAY,
        height: scale(1)

    },
    button: {
        position: 'absolute',
        right: scale(50),
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: scale(15)
    },
    image: {
        height: scale(20),
        width: scale(20)
    }
})

export default HomeHeader;
