import { check, PERMISSIONS, RESULTS, openSettings, request } from "react-native-permissions";
import { Platform, Alert } from "react-native";
// import strings from "../constants/LocalizedStrings";
// import RNSettings from "react-native-settings";

export function checkPermissions(callBack) {
    check(Platform.OS == 'android' ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE : PERMISSIONS.IOS.MEDIA_LIBRARY)
        .then(result => {
            console.log(result);
            switch (result) {
                case RESULTS.DENIED:
                    request(Platform.OS == 'android' ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE : PERMISSIONS.IOS.MEDIA_LIBRARY).then(result => {
                        console.log(result);
                        if (result == 'granted') {
                            // callBack(true)
                            // alert("sucess")
                        }
                    })
                    break;
                case RESULTS.GRANTED:
                    // callBack(true)
                    // alert("sucess")
                    break;
                case RESULTS.BLOCKED:
                    showPermissionsBlocked("camera")
                    break;
            }
        })
}


export function showPermissionsBlocked(type) {
    Alert.alert(
        "Permissions Blocked",
        "Please grant permissions from app settings",
        [
            { text: strings.cancel, onPress: () => console.log('OK Pressed') },
            { text: strings.settingsalert, onPress: () => { openSettings().catch(() => console.warn('cannot open settings')); } },
        ],
        { cancelable: false },
    );
}