import React from 'react';
import { StyleSheet,Text , View } from 'react-native';
import { Card, ListItem  } from 'react-native-elements'
export default class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.navigate = this.props.navigation.navigate; 
    this.state ={dataList:[{
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    ]}
  }

  onListItemClick(l){
 // this.props.navigation.navigate('ListDetails');
  this.navigate("ListDetails", {
    name: l.name,
    subtitle:l.subtitle,
    avatar:l.avatar_url
  });
  }
  render() {
    return (
      <View style={styles.container}>
{
  this.state.dataList.map((l, i) => (

    <Card  key={i} >
<ListItem
      onPress={()=> this.onListItemClick(l)}
      leftAvatar={{ source: { uri: l.avatar_url } }}
      title={l.name}
      subtitle={l.subtitle}
    />
    </Card>
 
   
  ))
}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }

});