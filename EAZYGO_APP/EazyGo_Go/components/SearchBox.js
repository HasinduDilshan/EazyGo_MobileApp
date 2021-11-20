import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class SearchBox extends Component {
    render() {
        return (
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: '#fff',
					borderRadius: 40,
					marginTop: 5,
					marginLeft: -6,
					width: '80%',
					height: '9%',
					paddingHorizontal: 10,
					paddingVertical: 0,
					alignItems: 'center',
				}}
			>
				<TextInput
					placeholder="Search"
					style={{ paddingHorizontal: 15, fontSize: 15, width: '100%' }}
				/>
			</View>
		);
    }
}
