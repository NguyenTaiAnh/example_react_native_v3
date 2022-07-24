import React, { useContext, useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import FormComponent from '../components/FormComponent';
import { Context } from '../context/BlogContext'
const CreateScreen = ({navigation}) => {
    const {addBlog} = useContext(Context);

    return <FormComponent onSubmit={(title, content)=>{
        addBlog(title, content,()=>navigation.navigate('Index'))
    }} navigation={navigation}/>
}

const styles = StyleSheet.create({})

export default CreateScreen;
