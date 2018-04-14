import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    return (
        <View>
            <Text> {label} </Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                label={label}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={{ height: 40, width: 120}}
            />
        </View>
    );
};

export { Input };