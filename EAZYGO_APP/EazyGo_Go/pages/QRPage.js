import React, { Component } from 'react';
import { ImageBackground, View, Text, SafeAreaView } from 'react-native';
import '../assets/body1.png';
import QrCodeScanner from '../components/QrCodeScanner';

export default function ({ navigation }) {
		return (
			<ImageBackground
				source={require('../assets/body1.png')}
				style={{
					width: '100%',
					height: '100%',
					opacity: 1,
					flex: 1,
					backgroundColor: 'rgba(0,0,0,0.2)',
				}}
			>
				<Text
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						color: '#FFFF',
						fontSize: 30,
						marginTop: 50,
						marginLeft: 60,
                        fontStyle: 'normal',
                        textDecorationLine: 'underline'
                        
					}}
				>
					Point the QR-Code
				</Text>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
					}}
				>
                
					<QrCodeScanner />
				</View>
			</ImageBackground>
		);
	}
