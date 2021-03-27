import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ onChange, value, onSubmit }) => {
    return(
        <TextInput onChangeText={onChange} value={value} onSubmitEditing={onSubmit} style={styles.input} />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        height: 34,
        alignSelf: 'stretch',
        padding: 8
    },
});