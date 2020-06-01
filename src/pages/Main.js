import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {AdMobBanner,AdMobInterstitial,PublisherBanner,AdMobRewarded} from 'expo-ads-admob';
  
function Main({ navigation }){
    const [user, setUser] = useState([]);
   
    return(
        <View style={styles.container}>
            <AntDesign name="github" style={styles.logo} />
            <Text style={styles.texto}>Search Github Profile</Text>
            <TextInput style={styles.input} placeholder="Username:"  placeholderTextColor="#fff" value={user} onChangeText={setUser} />
            <TouchableOpacity onPress={() => {
                navigation.navigate('Profile', { github_username: user });
            }} style={styles.button}>
                <Text style={styles.textoButton}>Search</Text>
            </TouchableOpacity>
           
       
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontSize: 20,
    },
    input :{
       backgroundColor:'#b5babf',
       fontSize: 14 ,
       borderRadius: 10,
       height: 50,
       marginTop: '5%',
       padding:10,
       width: '80%',
    }, 
    button: {
        backgroundColor: '#24292e',
        alignItems: 'center',
        justifyContent: 'center',
       borderRadius: 10,
       height: 50,
       marginTop: '5%',
       padding:10,
       width: '80%',

    },
    textoButton: {
       color: '#fff',
       fontWeight: 'bold',
       alignContent: 'center',
       marginTop: 5
    },
    logo: {
        fontSize: 70,
        marginBottom: 14
        
    }
})
export default Main;

