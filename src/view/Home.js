import React from 'react';
import { Button, View } from 'react-native';


const Home=({ navigation })=> {

    return (
      <View style={{flex:1,justifyContent:'center',alighItems:'center'}}>
        
        <Button
      title="First Page"
      onPress={() =>
        navigation.navigate('First', { name: '' })
      }
    />

      <Button
      title="Second Page"
      onPress={() =>
        navigation.navigate('Second', { name: 'Second' })
      }
    />
      <Button
      title="Third Page"
      onPress={() =>
        navigation.navigate('Third', { name: 'Third' })
      }
    />
        </View>
      
    )

}
export  default Home
