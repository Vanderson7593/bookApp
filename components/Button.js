import React from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS, images, icons } from "../constants";

const Button = (props) => {

    const { text, touchProps } = props

    return (
        <TouchableOpacity
            {...touchProps}
        >
            <View style={styles.button}>
                <Text
                    style={{
                        textAlign: "center",
                        color: COLORS.white
                    }}>{text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {

        backgroundColor: COLORS.primary,
        borderRadius: 5,
        height: 40,
        width: "100%",
        paddingVertical: 9,
        ...FONTS.body2
    },
});

export default Button;
