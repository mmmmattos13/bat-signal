import React, { useState } from 'react';
import { View, Text, Image, Pressable, TextInput } from 'react-native';
import styles from './HomeStyle';
import logo from '../../../assets/logo.png';

export function Home() {

  const [activate, setActivate] = useState(true);

  function  handlePress(){
    setActivate(prevState => !prevState)    
  }

  function batSignal(){
    return (
      <>
        <Text style={styles.title}>
            BAT SINAL
        </Text>

        <Image
          source={logo}
          style={{
            resizeMode:'contain',
            height: 200, 
          }}
        />  

        <Pressable style={styles.button} onPress={() => handlePress()} >
          <Text style={styles.text}>Ativar Bat-sinal</Text>  
        </Pressable>       
    </>
    );
  }  

  function form() {
      return (    
        <>               
            <Text style={styles.text}>Nome</Text>
            <TextInput style={styles.inputContainer} placeholder='nome'/>
    
            <Text style={styles.text}>Telefone</Text>
            <TextInput style={styles.inputContainer} placeholder='telefone'/>
    
            <Text style={styles.text}>Endereço</Text>
            <TextInput style={styles.inputContainer} placeholder='endereço'/>
    
            <Text style={styles.text}>Observação</Text>
            <TextInput style={[styles.textInput, { height: 100 }]} multiline placeholder='observação'/>
    
            <Pressable style={styles.button} onPress={() => handlePress()}>
                <Text style={styles.text}>Enviar!</Text>  
            </Pressable> 
    
        </>
      );
    }
    
    return (
      <View style={styles.appContainer}>
        { activate ? batSignal() : form() }
      </View>
    )  
}