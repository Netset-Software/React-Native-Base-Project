import React from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import Config from '../../utils/Config'
import { normalize } from '../../utils/Helpers'
import RNFS from 'react-native-fs';



interface props {
    visible: boolean;
    onPress?: (path) => void;
    onCencel: () => void;
    data?: object
}


const FullGuidenlineModal = ({ visible, onCencel, onPress, data }) => {
    return (
        <Modal
            visible={visible}
            animationType='fade'
            onRequestClose={onCencel}
            transparent
        >
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.headingText}>Full Guidelines</Text>
                    <Text style={[styles.InfoText, { marginTop: verticalScale(10) }]}>Select to view guideline below, which</Text>
                    <Text style={[styles.InfoText, { marginBottom: verticalScale(20) }]}>you want to see.</Text>
                    <ScrollView >
                        {data?.map((item, i) => {
                            return (
                                // <View>
                                RNFS.DocumentDirectoryPath + "/" + item.file_name && <>
                                    {i == 0 && <View style={[styles.bottomLine, { marginBottom: verticalScale(10) }]}></View>}
                                    <TouchableOpacity onPress={() => onPress(item.file_name)}>
                                        <Text style={styles.text}>{item.file_name}</Text>
                                    </TouchableOpacity>
                                    <View style={[styles.bottomLine, { marginTop: verticalScale(10), marginBottom: verticalScale(10) }]}></View>
                                </>
                            )
                        })}
                    </ScrollView>
                    <TouchableOpacity onPress={onCencel}>
                        <Text style={styles.btnText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(25,25,25,0.7)',
        paddingHorizontal: scale(15),
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: "center",
        paddingVertical: verticalScale(15),
        borderRadius: scale(5),
        maxHeight: verticalScale(500)
    },
    headingText: {
        color: Config.colors.appButton,
        fontSize: normalize(18),
        fontFamily: Config.fonts.BOLD
    },
    InfoText: {
        fontFamily: Config.fonts.MEDIUM,
        fontSize: normalize(13)
    },
    bottomLine: {
        width: '100%',
        backgroundColor: Config.colors.DarkGray,
        height: scale(1),
        alignSelf: 'flex-end',
        marginTop: scale(15),

    },
    text: {
        color: Config.colors.appButton,
        fontSize: normalize(17),
        fontFamily: Config.fonts.MEDIUM
    },
    btnText: {
        color: "#00378B",
        fontSize: normalize(17),
        fontFamily: Config.fonts.MEDIUM
    }
})


export default FullGuidenlineModal