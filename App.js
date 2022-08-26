import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import {Button,TextInput} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from './Login/Screen';
import ShowData from './Login/ShowData';
import { Provider } from 'react-redux';


import { store,persistor } from './AuthStore/store';
 
import { PersistGate } from 'redux-persist/es/integration/react'
import Cards from './Cards';
console.disableYellowBox = true;
const Stack = createNativeStackNavigator();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
 
  render() {
    return (
      <View style={{flex:1}} >
        <Provider store={store}>
        <PersistGate
loading={null}
persistor={persistor}
>
<NavigationContainer >
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
      {/* <Stack.Screen name="Cards" component={Cards} /> */}

        <Stack.Screen name="Screen" component={Screen} />
        <Stack.Screen name="ShowData" component={ShowData} />

      </Stack.Navigator>
    </NavigationContainer>

</PersistGate>
         
       
    </Provider>
      </View>
    );
  }
}

export default App;

