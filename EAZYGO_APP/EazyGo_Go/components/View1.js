import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View, ImageBackground } from 'react-native';

export default class View1 extends Component {
	render() {
		return (
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					height: 130,
					width: 120,
					borderRadius: 10,
					backgroundColor: '#cce0ff',
					opacity: 0.85,
				}}
			>
				<Text
					style={{
						fontSize: 15,
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						color: '#000000',
					}}
				>
					{this.props.title}
				</Text>
				<Text
					style={{
						fontSize: 25,
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						color: '#000000',
					}}
				>
					{this.props.value}
				</Text>
			</View>
		);
	}
}
