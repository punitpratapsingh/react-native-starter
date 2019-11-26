import React, { Component } from 'react';
import { 
    StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity,
Button
} from 'react-native';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          dataSource:[]
         };
       }
       componentDidMount(){
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(response => response.json())
       .then((responseJson)=> {
         this.setState({
          loading: false,
          dataSource: responseJson
         })
       })
       .catch(error=>console.log(error)) //to catch the errors if any
       }

    render(){
        if(this.state.loading){
            return( 
              <View style={styles.loader}> 
                <ActivityIndicator size="large" color="#0c9"/>
              </View>
          )}
        return(
            <View style={styles.container}>
                <Text> Name <hr /></Text>
    <Text>{this.state.dataSource.map( s => <Text style={styles.name}>{s.name}<br /></Text>)}</Text>
           <View>
             <Button 
             title='User'
             style={styles.btn}
             onPress={() => this.props.navigation.navigate('Users')}
             />
           </View>
           </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 100,
      paddingVertical: 50,
    },
    header: {
      fontSize: 12,
      fontFamily: 'Cochin'
    },
    name: {
        fontSize: 25,
        color: 'green'
    },
    btn: {
      height: 50,
      width:60,
    }
  })
export default Home;