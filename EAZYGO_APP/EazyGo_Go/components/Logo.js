import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import '../assets/body1.png'

export default class Logo extends Component {
    render() {
        return (
			<View style={styles.container}>
				<Image style={{ width: 500, height: 500 }} source={require('../assets/logo3.png')} />
				<Image style={{ 
                    width: 350, 
                    height: 300,
                    marginTop:-390
                     }} source={require('../assets/logo1.png')} />
			</View>
		);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});
