import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, Keyboard, View, StyleSheet, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import LoadingComp from '../components/reuse/LoadingComp';
import { Log } from '../utils/Logger';
import { RootState } from '../redux/reducers';
import { getIcons, Icons } from '../assets/Icons';
import { moderateScale } from 'react-native-size-matters';
import Config from '../utils/Config'
import LinearGradient from 'react-native-linear-gradient';

/**
 * HOC for including reusable UI logic
 */

const HOC = (ChildComponent: React.FC, left_Icon_Name?, riight_Icon_Name?): React.FC => {
    function InnerHOC(props: any) {
        const loadingStatus = useSelector(
            (state: RootState) => state.LoadingReducer.loadingStatus,
        );
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[Config.colors.PRIMERY, Config.colors.THEME_COLOR]}
                style={styles.BackgraoundStyle}
            >
                <SafeAreaView
                    style={{ flex: 1 }}>
                    <StatusBar
                        translucent={false}
                        backgroundColor={Config.colors.PRIMERY}
                        barStyle="light-content"
                    />
                    <ChildComponent />
                    {loadingStatus ? <LoadingComp /> : null}
                </SafeAreaView>
            </LinearGradient>



        );
    }
    return InnerHOC;
};

const styles = StyleSheet.create({
    BackgraoundStyle: {
        flex: 1
    }
})

export default HOC;
