import React from 'react';
import { StyleSheet,Text , View } from 'react-native';
import { Card, ListItem  } from 'react-native-elements'
export default class MainPage extends React.Component {
  constructor(props){
    super(props);
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

  render() {
    return (
      <View style={styles.container}>
{
  this.state.dataList.map((l, i) => (

    <Card  key={i} >
<ListItem
      
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