import React, { Component } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
class Signup extends Component {
    constructor(props) {
        super(props);
        
      }

    render() {
        return (
            <View style={styles.container}>

                <Text
                    style={styles.label}
                >Name</Text>
                <TextInput
                    style={styles.input}
                  
                />
                <Text
                    style={styles.label}
                    onChangeText={text => onChangeText(text)}
                    value={this.text}
                >
                    Email
                </Text>
                <TextInput
                    style={styles.input}
                  
                />
                <Text
                    style={styles.label}
                >Mobile</Text>
                <TextInput
                    style={styles.input}
                    
                />
                <Text
                    style={styles.label}
                >Dob</Text>
                <TextInput
                    style={styles.input}
                    
                />
                <br />
                <View>
                    <Button
                        title="Save"
                        onPress={() => this.props.navigation.navigate('Homes')}
                    />
                </View>
                <View>
                    <Button
                        title="Save"
                        onPress={() => this.props.navigation.navigate('Maps')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 100,
        paddingHorizontal: 50,
    },
    box: {
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#bbb',
        height: 40, fontSize: 29, borderColor: 'green', borderWidth: 1, width: 300, borderRadius: 15

    },
    label: {
        fontSize: 27, color: 'green'
    }
});

export default Signup;