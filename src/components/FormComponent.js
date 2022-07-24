import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const FormComponent = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.txt}> Field Title </Text> 
            <TextInput 
                style={styles.txtInput}
                value={title}
                onChangeText={(item)=>setTitle(item)}
                />
            <Text style={styles.txt}> Field Content </Text> 
            <TextInput 
                style={styles.txtInput}
                value={content}
                onChangeText={(item)=>setContent(item)}
                />
            <Button
            title='Save Data'
            onPress={() => onSubmit(title, content)}
            />
        </View>
    );
}
FormComponent.defaultProps = {
    initialValues:{
        title: '',
        content: '',
    },
}
const styles = StyleSheet.create({
    txt:{
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5
    },
    txtInput:{
        borderColor:'black',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom:10,
        marginHorizontal:10,
        fontSize:18
    }
})

export default FormComponent;
