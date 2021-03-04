import React from 'react'
import { View, StyleSheet } from 'react-native'
import { COLORS } from "../constants";


const ProgressBar = (props) => {
    const { completed, pages, style } = props

    const percent = (completed / pages) * 100

    const progressBarWrapper = {
        position: 'relative',
        height: 8,
        width: '100%',
        borderRadius: 200,
        backgroundColor: COLORS.progressBargray
    }
    const progressBar = {
        width: `${percent}%`,
        height: '100%',
        borderRadius: 200,
        backgroundColor: COLORS.primary
    }

    return (
        <View style={[progressBarWrapper, style]}>
            <View style={progressBar}></View>
        </View>
    )
};

export default ProgressBar