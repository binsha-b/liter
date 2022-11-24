import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,ScrollView } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Daily Survey',
    flag:'',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Weekly Survey',
    flag:'',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Monthly Survey',
    flag:'Already Did',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      
    

    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    
  },
  item: {
    backgroundColor: '#F9CCAE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 15,
    borderRadius: 11,
  },
  title: {
  textAlign:'center',
    fontSize: 20,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});

export default App;