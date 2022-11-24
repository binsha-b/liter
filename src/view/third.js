import React, { useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity } from "react-native";
import CategoryCard from "../common/categoryCard";


const Third = () => {
    const [status, setStatus] = useState('New');
   

     const onSelect = (label) => {
        setStatus(label);
      };

     const CountBox = ({
        label = 'New',
        onSelect,
        selected,
      }) => {
        return (
          <TouchableOpacity 
          onPress={() => onSelect(label)}
          style={[
            styles.countBoxContainer,
            {backgroundColor: selected ? "black" : "#BDBDBD"},
          ]}
           >
            <Text style={{ color: selected ? "white" : "black",fontSize:12,fontWeight:"bold",}}
              >
              {label}
            </Text>
            
          </TouchableOpacity>
        );
      };
    return (
      <View style={styles.container}>
                <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flexWrap: 'wrap',
                }}>
                <CountBox
                  label={'New'}
                  onSelect={onSelect}
                  selected={status === 'New'}
                />
                <CountBox
                  label={'Ongoing'}
                  onSelect={onSelect}
                  selected={status === 'Ongoing'}
                />
                <CountBox
                  label={'Completed'}
                  onSelect={onSelect}
                  selected={status === 'Completed'}
                />
                <CountBox
                  label={'Delayed'}
                  onSelect={onSelect}
                  selected={status === 'Delayed'}
                />
                
              </View>
              <CategoryCard></CategoryCard>
              <CategoryCard></CategoryCard>
              <CategoryCard></CategoryCard>
             



       
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    color:'black',
    borderColor:'black',
    marginTop:10,
   
  },
  countBoxContainer: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 10,
    width: 71,
    marginBottom: 8,
    
  },


 
});

export default Third;