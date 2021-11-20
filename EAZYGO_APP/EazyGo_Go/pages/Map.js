import * as React from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Map() {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				region={{
					latitude: 6.95888,
					longitude: 79.869,
					latitudeDelta: 0.5599,
					longitudeDelta: 0.2421,
				}}
			>
				<Marker coordinate={{ latitude: 6.95888, longitude: 79.869 }}>
					<Callout>
						<Text>You are in Here Now.</Text>
					</Callout>
				</Marker>
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
