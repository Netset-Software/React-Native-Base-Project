import React from 'react'
import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native'
import { screenHeight, screenWidth } from '../../utils/Helpers'
import Config from '../../utils/Config'

const LoadingComp = () => {
    return (
        <View style={styles.mainConatainer}>
            <View style={styles.container} />
            <ActivityIndicator color={Config.colors.THEME_COLOR} size="large" />
        </View>
    )
}

export const styles = StyleSheet.create({
    mainConatainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        height: screenHeight,
    },
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.05)',
        // opacity: 0.5,
    }
})

export default LoadingComp