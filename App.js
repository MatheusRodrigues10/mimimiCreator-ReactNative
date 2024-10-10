import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  
  
  const changeVowels = (t) => {
    // Substitui todas as vogais por 'i'
    return t.toLowerCase().replace(/[aeiouáàãâéèêíìîóòôúùû]/g, 'i');
  };
  
  //coloca os textos na imagem.
  const write = (t) => {
    setText1(t);
    setText2(changeVowels(t));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Criador de Mimimi</Text>
      </View>
      
      <View style={styles.inputArea}>
        <TextInput style={styles.input} placeholder='Digite seu texto'
          onChangeText={write}
        />
      </View>

      <View style={styles.area}>
        <Text style={[styles.text, styles.text1]}> {text1.toUpperCase()} </Text>
        <Image style={styles.mike} source={require('./img/miko-hughes.jpg')} />
        <Text style={[styles.text, styles.text2]}> {text2.toUpperCase()} </Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    paddingTop:50,
    backgroundColor:'#F5EDED',
    flex:1,
    flexDirection:'column',
    alignItems:'center'
  },
  title:{
    fontSize:30,
    color:'#7FA1C3',
  },
  inputArea:{
    alignSelf:'stretch',
  },
  input:{
    borderWidth:1,
    borderColor:'#7FA1C3',
    backgroundColor:'#EEEEEE',
    color:'#000000',
    height:40,
    margin:20,
    padding:10,
    borderRadius:10
  },
  area:{
    width:300,
    height:300,
    marginTop:10
  },
  mike:{
    width:300,
    height:300,
    borderRadius:1,
    marginTop:-70,
    zIndex:0
  },
  text:{
    fontSize:25,
    color:'#FFFFFF',
    padding:10,
    backgroundColor:'transparent',
    fontWeight:'bold',
    textAlign:'center',
    height:75
  },
  text1:{
    zIndex:1
  },
  text2:{
    zIndex:1,
    marginTop:-70
  }
});
