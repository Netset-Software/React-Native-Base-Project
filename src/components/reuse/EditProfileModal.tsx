import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, Platform, UIManager, LayoutAnimation } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'
import Config from '../../utils/Config'
import { normalize } from '../../utils/Helpers'
import { TextInputComp, Button } from '../reuse'
import { getIcons, Icons } from '../../assets/Icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ValidationUpdateProfileType } from '../../utils/ValidationHelper'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateProfileAction } from '../../redux/actions/AuthActions'
import { ShowToast } from '../reuse'
import { RootState } from '../../redux/reducers';
import LoadingComp from '../reuse/LoadingComp';


if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface props {
    visible: boolean;
    onPress?: () => void;
    onCencel?: () => void;
    user: object
}

/**
 * 
 * @param param0 visible={ture=modal open or false=modal close}, onCencel={funtion for close modal} , onPress={funtion for call update api}
 * @returns 
 */
const EditProfileModal = ({ visible, onCencel, user }) => {
    const info = {
        first_name: user?.first_name,
        last_name: user?.last_name
    }

    const [userData, setUserData] = useState(info)
    const [validationError, setValidationError] = useState<ValidationUpdateProfileType>()
    const dispatch = useDispatch();
    const loadingStatus = useSelector((state: RootState) => state.LoadingReducer.loadingStatus,);//get loading Status status (true or fale)

    // funtion for call update profile API
    const onUpdatePress = async () => {
        const res: any = await dispatch(UpdateProfileAction(userData))
        if (res?.code == 405) {
            setValidationError(res?.validationObject)
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        } else if (res?.code == 200) {
            ShowToast(res?.response?.message)
            setUserData({ ...userData, first_name: '', last_name: '' })
            onCencel()
        }
        else {
            ShowToast(res?.response?.message ? res?.response?.message : res?.error?.message ? res?.error.message : res?.error)
        }
        console.log(res);


    }

    /**
    * 
    * @param info contain object to store input value in state
    */
    const onChangeValue = (info: object) => {
        setUserData({ ...userData, ...info })
    }

    return (
        <Modal
            visible={visible}
            animationType='fade'
            onRequestClose={onCencel}
            transparent
        >
            <KeyboardAwareScrollView
                enableAutomaticScroll={Platform.OS === 'ios'}
                keyboardShouldPersistTaps={'handled'}
                enableOnAndroid={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flex: 1,
                }}
            >
                <View style={styles.mainContainer}>
                    <View style={styles.container}>
                        <TextInputComp
                            text={"First Name"}
                            placeholder={"E.g: Smith"}
                            IconName={getIcons(Icons.USER_ICON, scale(18))}
                            value={userData.first_name}
                            validationMessage={validationError?.first_nameError}
                            onChangeText={(text) => {
                                onChangeValue({ first_name: text })
                                setValidationError({ ...validationError, first_nameError: null })
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                            }}
                        />
                        <TextInputComp
                            text={"Last Name"}
                            placeholder={"E.g: Smith"}
                            IconName={getIcons(Icons.USER_ICON, scale(18))}
                            value={userData.last_name}
                            validationMessage={validationError?.last_nameError}
                            onChangeText={(text) => {
                                onChangeValue({ last_name: text })
                                setValidationError({ ...validationError, last_nameError: null })
                                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                            }}
                        />
                        <Button
                            text="Update"
                            style={{ alignSelf: 'center', height: verticalScale(35), marginTop: verticalScale(25), padding: scale(0), }}
                            onPress={onUpdatePress}
                        />

                        <View style={[styles.bottomLine, { marginTop: verticalScale(25), marginBottom: verticalScale(10) }]}></View>
                        <TouchableOpacity onPress={onCencel}>
                            <Text style={styles.btnText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            {loadingStatus ? <LoadingComp /> : null}
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
        paddingVertical: verticalScale(15),
        borderRadius: scale(5)
    },
    headingText: {
        color: Config.colors.appButton,
        fontSize: normalize(18),
        fontFamily: Config.fonts.BOLD,
        alignSelf: 'center'
    },
    InfoText: {
        fontFamily: Config.fonts.MEDIUM,
        fontSize: normalize(13),
        marginLeft: scale(10)
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
        fontSize: normalize(15),
        fontFamily: Config.fonts.MEDIUM,
        alignSelf: 'center'
    },
    dotStyle: {
        color: Config.colors.appButton,
        fontSize: normalize(20),
    }
})


export default EditProfileModal