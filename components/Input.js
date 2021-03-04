import React from 'react';

import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS, images, icons } from "../constants";

const Input = (props) => {

    const { propStyle } = props

    return (
        <View style={{ marginBottom: SIZES.padding * 2 }}>
            <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.darkgray}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        color: COLORS.black,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        maxHeight: 100,
        minHeight: 40,
        ...FONTS.body3
    },
});

export default Input;
