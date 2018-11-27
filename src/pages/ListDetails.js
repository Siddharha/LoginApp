import React from 'react';
import { StyleSheet,Text , View } from 'react-native';
import { Card, ListItem  } from 'react-native-elements'
export default class ListDetails extends React.Component {
  constructor(props){
    super(props);
    this.params = this.props.navigation.state.params;
   
  
  }

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
    //headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    headerStyle:{
        backgroundColor:'white',
    },
});

  render() {
    return (
      <View style={styles.container}>
      
      <Text style={styles.title_style}>{this.params.name}</Text>
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
   title_style:{
     
   }

});