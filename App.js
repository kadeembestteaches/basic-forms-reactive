import React, { Component,useState } from 'react'
import { Text, View,StyleSheet, TextInput, Button,Image } from 'react-native'


const  App = () =>  
{

    const [firstNum, setNum1] = useState(0);
    const [secondNum, setNum2] = useState(0);
    const [answer, setAnswer] = useState(0);
    return (
      <View style={styles.container}>
        <Text style={styles.label}> First Number </Text>
        <TextInput style={styles.textBox} 
       
       keyboardType="numeric" 
        placeholder="Enter First Number"
        onChangeText={(val)=>{

        //  console.log(parseInt(val2));
            setNum1((parseInt(val)))
        }}
        
        
       value={firstNum} /> 

        <Text style={styles.label}> Second Number </Text>

        <TextInput style={styles.textBox} keyboardType="numeric"
         
         placeholder="Enter Second Name" 
         
         onChangeText={(val)=>{
           setNum2(parseInt(val))
        }}
         value={secondNum}/> 

        <Button onPress={()=>{

            console.log(drake);
            setAnswer((firstNum+secondNum));
            setNum1("")
            setNum2("")
        }} title="Add Two Numbrs" />

      <Text style={styles.answer}>{answer}</Text>
   
      </View>

   
    )
  }


const styles = StyleSheet.create({
  container :
  {
    marginTop:50,
    paddingLeft:32,
    paddingRight:32
  },

  label:{

    fontSize:18,
    color:"red",
    marginBottom:16
  },

  textBox :{

    borderWidth:1,
    borderColor:"black",
    padding:10,
    marginBottom:20

  },

  answer:
  {

  }




});

export default App;
