import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FormComponent from '../components/FormComponent';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const {data, editBlog} = useContext(Context);
    const blog = data.find((item) => item.id === id)
    return <FormComponent onSubmit={(title, content)=>editBlog(id, title, content,()=>navigation.pop())} initialValues={{title: blog.title, content: blog.content}}/>
}

const styles = StyleSheet.create({})

export default EditScreen;
