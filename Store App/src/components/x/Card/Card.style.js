import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
        container:{

            
            backgroundColor: '#F0F4F3',
            flex:1,
            margin:10,
            borderWidth: 1,
            borderColor:'gray',
            borderRadius:10,
        },

        image: {

            height: Dimensions.get('window').height /4,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            margin:10,

        },

        title: {
            textAlign:'left',
            fontWeight:'bold',
            fontSize:18,
            margin:10,
        },

        price: {
            marginTop: 3,
            margin :10,
    
        },

        inStock_text:{
            color:'red',
            fontWeight:'bold',
            fontSize:15,
            margin:10,
            marginTop:3,

        },

        image_body:{
            backgroundColor: 'red',
            margin:10,

        }

    })