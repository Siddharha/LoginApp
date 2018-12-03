import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import MainPage from './MainPage'
export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state ={
                  dataSource:"",
                  user:"",
                  password:"",
                  data: [],
                  isLoading: true,}
  }

onPress(){

  if((this.state.user !="") && (this.state.password !="")){
   // this.setState({isLoading: false});
    this.callLogin();
  }
}

componentDidMount() {
  fetchFunction()
    .then(data => this.setState({ data, isLoading: false }))
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
  const {data, isLoading} = this.state;
    return (
      
      <View style={styles.container}>
      
        <Text style={styles.textStyle}>Log In</Text>
        
       <ActivityIndicator 
       animating={this.state.isProgress} 
       size="large" 
       color="#0000ff" />
    <KeyboardAvoidingView
      style={styles.container_view_avoid}
      behavior="padding"
    >
       <TextInput
        placeholder="Enter User ID"
        style={styles.inputStyle}
        onChangeText={(text) => this.setState({user:text})}/>
        <TextInput
        onChangeText={(text) => this.setState({password:text})}
        secureTextEntry={true}
        placeholder="Enter Password"
        style={styles.inputStyle}/>
</KeyboardAvoidingView>

<View>
        <MainPage data={data} />
        {isLoading && (
          <ActivityIndicator
            style={{ height: 80 }}
            color="#C00"
            size="large"
          />
        )}
      </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_view_avoid: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
   textStyle: {
     flex:0,
    color:'#00bcd4',
    fontWeight:"bold",
    fontSize: 30,
    marginBottom: 10,
    marginTop: 50,
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
    fontSize:20,
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