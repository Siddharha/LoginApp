import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, AppRegistry, ActivityIndicator } from 'react-native';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true,
                  dataSource:"",
                  user:"",
                  password:"",
                  isProgress:false,}
                  this.handleChange = this.handleChange.bind(this);
  }

onPress(){

  if((this.state.user !="") && (this.state.password !="")){
    this.handleChange()
    console.log(this.state.isProgress)
  
    this.callLogin();
  }
}

handleChange(){
  this.setState({ isProgress: true});
}

callLogin(){

 const response = fetch(
  "https://creative-lizard.000webhostapp.com/login.php", {
      method: 'POST',
      headers: {
       Accept: 'application/json',
          'Content-Type': 'application/json',
     },
     body: JSON.stringify({
        data:
        {
          email: "siddhartha.ee.13@gmail.com",
          user: this.state.user,
          password: this.state.password
        }
     }),
    }) 
    .then((response) => { return  response.json() } ) 
    .catch((error) => console.warn("fetch error:", error))
    .then((response) => {
      console.log(JSON.stringify(response));
     // this.state.isProgress = false;
      if(response.success==1){
        this.props.navigation.navigate('MainPage');
      }else{
        Alert.alert("Login Alert!",response.message);
      }
})
}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Log In</Text>
        
       <ActivityIndicator animating={this.state.isProgress} size="large" color="#0000ff" />
        <TextInput
        placeholder="Enter User ID"
        style={styles.inputStyle}
        onChangeText={(text) => this.setState({user:text})}/>
        <TextInput
        onChangeText={(text) => this.setState({password:text})}
        placeholder="Enter Password"
        style={styles.inputStyle}/>

         <TouchableOpacity
         style={styles.button}
         onPress={() => this.onPress()}
       >
         <Text style={styles.btn_txt}> LOG IN </Text>
       </TouchableOpacity>
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
  },
  loader:{
    
  }

});