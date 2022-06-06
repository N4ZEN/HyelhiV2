import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { COLORS, SIZES, colour } from '../../assets/colors/theme';


const TextButton = ({buttonContainerStyle, disabled, label, labelStyle, onPress}) => {
    return (
        <TouchableOpacity
        style = {{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.green,
            ...buttonContainerStyle
        }}
       
        disabled= {disabled}
        onPress = {onPress}>
        <Text style ={{
            fontFamily: 'PoppinsRegular',
            fontSize: 16,
            color: COLORS.white,
            ...labelStyle
        }}>{label}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({})

export default TextButton;
