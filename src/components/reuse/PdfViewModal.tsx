import React from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Platform } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import Config from '../../utils/Config'
import { normalize } from '../../utils/Helpers'
import WebView from 'react-native-webview'
import Pdf from 'react-native-pdf';




interface props {
    visible: boolean;
    onCencel: () => void;
    data?: string
}


const PdfViewModal = ({ visible, onCencel, data }) => {
    const resources = {
        file: data,
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        base64: 'JVBERi0xLjMKJcfs...',
    };
    return (
        <Modal
            visible={visible}
            animationType='fade'
            onRequestClose={onCencel}
            transparent
        >
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text style={styles.headingText}>PDF</Text>
                    <ScrollView style={{ height: verticalScale(500), width: "100%" }}>
                        {/* <WebView
                            // source={require('file:///Users/netset/Library/Developer/CoreSimulator/Devices/06FDA964-4288-4421-8107-6F2417E7D75D/data/Containers/Data/Application/4583D7EB-FFBF-49E3-AF21-4994DC7AE992/Documents/1625714607245_checklist.pdf')}
                            source={{ uri: data }}
                            // javaScriptEnabled={true}
                            // domStorageEnabled={true}
                            // useWebKit={true}
                            startInLoadingState={true}
                            // allowUniversalAccessFromFileURLs={true}
                            // allowFileAccess={true}
                            originWhitelist={['file://']}
                            style={{ height: verticalScale(500), width: "100%", flex: 1 }}
                        /> */}
                        <Pdf
                            source={{ uri: data }}
                            // onLoadComplete={(numberOfPages, filePath) => {
                            //     console.log(`number of pages: ${numberOfPages}`);
                            // }}
                            // onPageChanged={(page, numberOfPages) => {
                            //     console.log(`current page: ${page}`);
                            // }}
                            // onError={(error) => {
                            //     console.log(error);
                            // }}
                            // onPressLink={(uri) => {
                            //     console.log(`Link presse: ${uri}`)
                            // }}
                            style={{ height: verticalScale(500), width: "100%", flex: 1 }}
                        // style={styles.pdf}
                        />

                    </ScrollView>

                    <TouchableOpacity style={styles.closeButton} onPress={onCencel}>
                        <Text style={styles.btnText}>Close</Text>
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
        // paddingHorizontal: scale(15),
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        alignItems: "center",
        // paddingVertical: verticalScale(15),
        borderRadius: scale(5),
        // maxHeight: verticalScale(500)
    },
    headingText: {
        color: Config.colors.appButton,
        fontSize: normalize(18),
        fontFamily: Config.fonts.BOLD,
        marginVertical: verticalScale(10)
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
        fontFamily: Config.fonts.MEDIUM,
    },
    closeButton: {
        height: verticalScale(50),
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    }
})


export default PdfViewModal