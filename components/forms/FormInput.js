import React from 'react';
import {View, StyleSheet, Text, TextInput } from 'react-native';
import { COLORS, SIZES } from '../../assets/colors/theme';

const FormInput = ({
    containerStyle,
    value,
    label,
    multiline,
    placeholder,
    inputStyle, 
    onFocus,
    input,
    editable,
    onPressIn, 
    onPressOut,
    defaultValue,
    onTouchEnd,
    onTouchStart,
    onChangeText,
    styleMain,
    onBlur,
    prependComponent, 
    appendComponent, 
    onChange, 
    secureTextEntry, 
    keyboardType ='default',
    autoCompleteType = 'off',
    autoCapitalize ='none',
    errorMsg = ""
}) => {
    return (
        <View style = {{
            marginHorizontal:2,
            ...containerStyle,
        }}>
            {/*Label and Error msg */}
            <View style = {{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style = {{
                    color: COLORS.black,
                    fontFamily: 'PoppinsSemiBold',
                    fontSize: 14,
                    paddingLeft: 5,
                }}>{label}</Text>
                <Text style = {{
                    color: COLORS.red,
                    fontFamily: 'PoppinsRegular',
                    fontSize: 14,
                }}>{errorMsg}</Text>
            </View> 
            {/*Text Input */}   
            <View style ={{
                flexDirection: 'row',
                height: 55, 

               // marginTop: SIZES.base,
                paddingLeft: SIZES.padding,
                paddingRight: 10, 
                borderRadius: SIZES.radius,
                borderWidth: 0,
                borderColor: COLORS.lightGray1,
                backgroundColor: COLORS.lightGray1,
                marginBottom: 10,
                alignItems: 'center',
                ...styleMain,
                
            }}>
                <TextInput  style = {{
                    flex:1,
                    
                    ...inputStyle
                }}
                onTouchEnd ={onTouchEnd}
                onTouchStart={onTouchStart}
                defaultValue = {defaultValue}
                value = {value}
                Input = {input}
                onFocus= {onFocus}
                placeholder= {placeholder}
                placeholderTextColor= {COLORS.darkGray2}
                secureTextEntry ={secureTextEntry}
                keyboardType= {keyboardType}
                autoCapitalize ={autoCapitalize}
                onPressIn = {onPressIn} 
                onPressOut = {onPressOut}
                autoCompleteType ={autoCompleteType}
                //onChange ={onChange}
                onChangeText ={onChangeText}
                editable = {editable}
                multiline ={multiline}
                //style= {style} 
                //ref={input => { this.textInput = input }}
            />
                {appendComponent}
            </View>        
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default FormInput;
