import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ScreenOrientation from 'expo-screen-orientation';
import LandPage from './pages/LandPage';
import Home from './pages/Home';
import QRPage from './pages/QRPage';
import Map from './pages/Map';


const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor="#000080" barStyle="light-content" />
			<Stack.Navigator>
				<Stack.Screen name="Welcome" component={LandPage} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="QRPage" component={QRPage} />
				<Stack.Screen name="Map" component={Map} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;








const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ff99c2',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
