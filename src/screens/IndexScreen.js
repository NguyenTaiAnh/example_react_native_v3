import React, { useContext, useState } from 'react';
import {View, StyleSheet, Text, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
const IndexScreen = ({navigation}) => {
    const {data, addBlog, deleteBlog} = useContext(Context)
    return (
        <View>
           <Text style={{fontSize:25, textAlign: 'center', fontWeight: 'bold', marginVertical:10}}>BlogSport</Text>
            <FlatList 
                data={data}
                keyExtractor={item =>item.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.container}>
                                <Text style={styles.titleStyle}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={()=> deleteBlog(item.id)}>
                                    <Feather name="trash-2" style={styles.iconStyle}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
}

IndexScreen.navigationOptions = ({navigation}) => {
    return { 
        headerRight: () =>  <TouchableOpacity onPress={() =>  navigation.navigate('Create')}> 
            <Feather name="plus" size={30} style={{marginHorizontal: 20}} />
        </TouchableOpacity> 
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 18
    },
    titleStyle: {
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 18,
    }
})

export default IndexScreen;
