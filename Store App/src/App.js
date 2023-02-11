import React, { useState } from 'react';
import {SafeAreaView,View,Text,StyleSheet,ScrollView,TextInput,FlatList} from 'react-native'
import Card from './components/x/Card';



import store_data from './store_data.json';

const App = () => {

    const renderStore = ({item}) => <Card items = {item} /> 
   
    return(

        <SafeAreaView>
            <ScrollView>
            <View>
            
            <Text style={styles.header}> STORE APP </Text>

            <TextInput 
                style= {styles.search_input} 
                placeholder="Ara.."
             />
            
            <FlatList
                    keyExtractor={item => item.id}
                    data={store_data}
                    renderItem={renderStore}
                    numColumns={2}

                />

           

            </View>

            </ScrollView>
        </SafeAreaView>


    );
};

const styles = StyleSheet.create({

    container: {
       
        backgroundColor: 'white',
        flex:1,
        
    },
    search_input:{

        height: 40,
        margin: 12,
        padding: 10,
        borderRadius:10,
        backgroundColor: '#dcdcdc',

    },

    header: {
        textShadowColor: 'purple',
        fontSize:50,
        fontStyle: 'italic',
        textAlign:'center',
        fontWeight:'bold',

    },


   
});



export default App;