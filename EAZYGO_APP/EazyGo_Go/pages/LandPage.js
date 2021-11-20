import React, { Component } from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Logo from '../components/Logo';

export default function LandPage({ navigation }) {
        return (
			<SafeAreaView style={styles.container}>
				<Logo />
				<TouchableOpacity
					style={styles.opacity1}
					activeOpacity={0.5}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={styles.LogoText}> Start Your Journey --&gt; </Text>
				</TouchableOpacity>
			</SafeAreaView>
		);
    }


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#00004d',
	},
	opacity1: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 130,
		marginBottom: 70,
	},
	LogoText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',
		fontStyle: 'italic',
	},
});