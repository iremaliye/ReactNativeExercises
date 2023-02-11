import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import styles from'./Card.style';


const Card = ({items}) => {
    
    const [store_data]= useState({
        isFalse: false,
    }); 
    return(
            
        <View style = {styles.container}>

            <Image style = {styles.image} source={{uri: items.imgURL }} />
            <Text style = {styles.title} > {items.title}</Text>
            <Text style = {styles.price}> {items.price}</Text>
            <Text style={styles.inStock_text}>{items.inStock ? ' ' : 'STOKTA YOK' }</Text>
           
        </View>
        

    );
};

export default Card;