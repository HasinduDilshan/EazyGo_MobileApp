import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View, ImageBackground, Button } from 'react-native';

export default class SearchBtn1 extends Component {
	render() {
		return (
			<Button
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					height: 35,
					width: 60,
					marginLeft: 230,
					marginTop: -38,
					borderRadius: 10,
					backgroundColor: '#99c2ff',
				}}
			>
				<Text style={{ fontSize: 12, alignItems: 'center', justifyContent: 'center', color: '#000000' }}>
					Search
				</Text>
			</Button>
		);
	}
}
