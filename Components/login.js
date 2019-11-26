import React , {Component }from 'react';
import { StyleSheet, Text, View, TextInput , Button, Alert} from 'react-native';


class Login extends Component  {

  

render(){
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
     <View>  
       <TextInput
      style={styles.input}
    />
      </View>
      <View >
      <Text style={styles.pass}>Password</Text>
     <View>  
       <TextInput
      style={styles.input}
    />
      </View>
    </View>
    
    <View style={styles.space}> 
    <Button
          title="Login"
          onPress={() => Alert.alert('Simple Button ')}
        />
    </View>
    
    <View style={styles.space}>
      <Button
      title="Register New User"
      onPress={() => this.props.navigation.navigate('Register')}
      />
    </View>
    </View>
  );
}
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 200,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
      fontSize: 29,
  },
  pass: {
      marginLeft: 83,
      fontSize: 29
  },
  input: {
    backgroundColor: '#bbb',
    height: 40, fontSize: 29, borderColor: 'green', borderWidth: 1, width: 300, borderRadius: 15

},
  space: {
      padding: 15,
  }
});

export default Login;
