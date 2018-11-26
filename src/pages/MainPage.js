import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   textStyle: {
    color:'#00bcd4',
    fontWeight:"bold",
    fontSize: 30,
    marginBottom: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  netTextStyle:{
    color:'#000',
    fontWeight:"bold",
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    height: 40, 
    margin: 5,
    padding:10,
    borderColor: 'gray', 
    borderWidth: 1,
    width:'90%',
  
  },
  button:{
    margin: 10,
    padding:15,
    backgroundColor:'#000'
  },
  btn_txt:{
    color: '#fff',
    fontWeight:"bold",
    fontSize: 18,
  }

});