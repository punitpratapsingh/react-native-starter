import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchEntity } from '../Redux/Actions'; 
import { APPLICATION_ROUTES} from './constants';

class User extends Component {

    constructor(props) {
		super(props);
	}

	componentWillMount() {
		const {  triggerFetchEntity } = this.props;
		triggerFetchEntity();
	}
    render() {
        const {
			fetching,
			users: {
				editing,
				data,
				page,
				limit,
				length,
				error,
				success,
			},
			
		} = this.props;
		
		if(fetching){
            return( 
              <View style={styles.loader}> 
                <ActivityIndicator size="large" color="#0c9"/>
              </View>
          )}
        return (
            <View style={Styles.container}>
               <Text >User</Text>
               <Text>
                   { data && data.map( s => <Text style={Styles.label}>{s.lastName}<br /></Text>)}
               </Text>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        paddingHorizontal: 50,
        paddingVertical: 50,
        width: 400,
        height: 650,
        backgroundColor: 'powderblue'
    },
    label: {
        color: 'green',
        fontSize: 25,
        marginTop: 10
    }
});


const mapDispatchToProps = dispatch => {
	return {
		triggerFetchEntity: (page, limit) => dispatch(fetchEntity({
			payload: { type: 'user' },
			page,
			limit,
			endpoint: APPLICATION_ROUTES.USERS_LIST,
		})),
		triggerNullifyError: () => dispatch(nullifyError()),
		triggerNullifySuccess: () => dispatch(nullifySuccess()),
	};
}

const mapStateToProps = state => {
	const { fetching, users } = state;
	return { fetching, users };
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);