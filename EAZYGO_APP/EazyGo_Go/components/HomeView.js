import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';
import { Button } from 'native-base';
import View1 from '../components/View1';
import SearchBox from '../components/SearchBox';
import Map from '../pages/Map';
import '../assets/favicon.png';

export default function LandPage({ navigation }) {
	return (
		<SafeAreaView>
			<View style={{ paddingHorizontal: 40, marginTop: 25, width: '100%' }}>
				<Text style={{ color: '#fff', fontSize: 45 }}>Hello...</Text>
				<Text style={{ textDecorationLine: 'underline', fontStyle: 'italic', color: '#fff' }}>
					We are Pleaser to Using	you with this Application.
				</Text>

				<SearchBox />

				<Button
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: 35,
						width: 60,
						marginLeft: 230,
						marginTop: -36,
						borderRadius: 10,
						backgroundColor: '#99c2ff',
					}}
				>
					<Text style={{ fontSize: 12, alignItems: 'center', justifyContent: 'center', color: '#000000' }}>
						Search
					</Text>
				</Button>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{
						marginRight: -20,
						marginTop: 20,
						marginLeft: -20,
						flexDirection: 'row',
					}}
				>
					<TouchableOpacity>
						<View1 title="No of Turns:" value={5} />
					</TouchableOpacity>

					<TouchableOpacity>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 130,
								width: 120,
								marginLeft: 10,
								borderRadius: 10,
								backgroundColor: '#800040',
							}}
						>
							<Text
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									color: '#ffffff',
								}}
							>
								No of Passengers in lobby :
							</Text>
							<Text
								style={{
									fontSize: 30,
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									color: '#ffffff',
								}}
							>
								25
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 130,
								width: 120,
								marginLeft: 10,
								borderRadius: 10,
								backgroundColor: '#ffcccc',
							}}
						>
							<Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
								No of Busses in Route :
							</Text>
							<Text
								style={{
									fontSize: 30,
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}
							>
								8
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 130,
								width: 120,
								marginLeft: 10,
								borderRadius: 10,
								backgroundColor: '#ffffff',
							}}
						>
							<Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
								Time to finish the Trip :
							</Text>
							<Text
								style={{
									fontSize: 30,
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									color: '#e60000',
								}}
							>
								48 min
							</Text>
						</View>
					</TouchableOpacity>
				</ScrollView>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{
						marginRight: -20,
						marginTop: 5,
						marginLeft: -20,
						flexDirection: 'row',
					}}
				>
					<TouchableOpacity>
						<View1 title="Daily Balance :" value={'RS:4210'} />
					</TouchableOpacity>

					<TouchableOpacity>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 130,
								width: 120,
								marginLeft: 10,
								borderRadius: 10,
								backgroundColor: '#800040',
							}}
						>
							<Text
								style={{
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									color: '#ffffff',
								}}
							>
								No of Passengers in Next Halt :
							</Text>
							<Text
								style={{
									fontSize: 30,
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									color: '#ffffff',
								}}
							>
								5
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 130,
								width: 120,
								marginLeft: 10,
								borderRadius: 10,
								backgroundColor: '#ffcccc',
							}}
						>
							<Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
								No of Busses :
							</Text>
							<Text
								style={{
									fontSize: 30,
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								}}
							>
								8
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity>
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								height: 130,
								width: 120,
								marginLeft: 10,
								borderRadius: 10,
								backgroundColor: '#ffffff',
							}}
						>
							<Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
								Time to finish the Trip :
							</Text>
							<Text
								style={{
									fontSize: 30,
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									color: '#e60000',
								}}
							>
								48 min
							</Text>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
