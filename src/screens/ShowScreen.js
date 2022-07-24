import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../context/BlogContext'
import {FontAwesome} from '@expo/vector-icons'
const ShowScreen = ({navigation}) => {
    const id = navigation.getParam('id')
    const { data } = useContext(Context)
    const getData= data.find( (item) => item.id == id)
    return (
        <View>
            <Text>SHowing Screen</Text>
            <Text>{getData.title}</Text>
        </View>
    );
}

ShowScreen.navigationOptions =({navigation})=> {
    return {
        headerRight: () => <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
            <FontAwesome name="pencil" size={20} style={{marginHorizontal: 20}} />
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({})

export default ShowScreen;
