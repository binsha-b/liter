import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/view/Home'
import First from './src/view/first'
import SecondView from './src/view/SecondView'
import Third from './src/view/third';
//import Login from './components/login';
//import Signup from './components/signup';
//import Dashboard from './components/dashboard';
//const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: '' }}
        />
        <Stack.Screen name="First" component={First} options={{ title: '' }} />
        <Stack.Screen name="Second" component={SecondView} options={{ title: 'Aston Fuel Station' }} />
        <Stack.Screen name="Third" component={Third} options={{ title: 'Aston Fuel Station' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
/*


/*function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        
      />
      <Stack.Screen 
       name="Dashboard" 
       
      />
    </Stack.Navigator>
  );
}
 function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
export default App();*/

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}> red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default MyStack;