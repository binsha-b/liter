import React, { useState } from "react";
import { View, StyleSheet,Text,TouchableOpacity } from "react-native";

const categoryCard = () => {
    return(

        <TouchableOpacity style={{backgroundColor:"#DDDDDD",
                      height:170,width:"92%",marginTop:8,
                      borderRadius: 12,
                      }}>
                <Text style={{padding:10,fontWeight:"bold",color:"black"}}>#4569874523658</Text>


                <View style={styles.containertab}>
                    <View style={styles.tableContainer}>
                      
                      <View style={styles.tableRow}>
                          <View style={styles.tableColumnClockInOutTimes}>
                            <Text style={styles.textLineItem}>Category</Text>
                          </View>
                          <View style={styles.tableColumnTotals}>
                            <Text style={styles.textLineItem}>Created on</Text>
                          </View>
                          <View style={styles.tableColumnClockInOutTimes}>
                            <Text style={styles.textLineItem}>Status </Text>
                          </View>
                      </View>
                      <View style={styles.tableRow}>
                          <View style={styles.tableColumnClockInOutTimes}>
                            <Text style={styles.categoryStyle}>Fuel Tank</Text>
                          </View>
                          <View style={styles.tableColumnTotals}>
                            <Text style={styles.createdStyle}>10 Oct 2022</Text>
                          </View>
                          <View style={styles.tableColumnClockInOutTimes}>
                            <Text style={styles.statusStyle}>Completed </Text>
                          </View>
                      </View> 
                      
                    </View>
                </View>
                <Text style={{padding:10,color:"black"}}>Manager : Mr Muhammed</Text>
  
              </TouchableOpacity>



    )

}

const styles = StyleSheet.create({
  
    containertab: {
      flex: 1,
      marginTop:0,
      maxHeight:85,
      //padding: 10
      borderBottomWidth:1,
      borderBottomColor:"#b3b9b7",
   },
   
   tableColumnClockInOutTimes: {
      alignItems: "center",
      flex: 2,
      justifyContent: "center",
      margin: 1
   },
   tableColumnTotals: {
      alignItems: "center",
     // backgroundColor: "#000000",
      flex: 2,
      justifyContent: "center",
      margin: 1
   },
   tableRow: {
      flex: 2,
      flexDirection: "row",
      maxHeight: 35,
      //backgroundColor: "green",
     
   },
   
   tableContainer: {
     // backgroundColor: "blue",
      borderRadius: 5,
      flex: 1,
      marginTop: 0,
      padding: 5,
     
   },
    textLineItem: {
      color: "#727272"
    },
    categoryStyle:{
      borderWidth: 1,
      borderColor: "#DDDDDD",fontWeight:"bold",color:"black",backgroundColor:"#c1d8dd",
      borderRadius: 10,
      alignItems: 'center',
      padding: 6,
      width: "75%",
      height:35,
      fontSize:12,
      marginTop:4,
    },
    createdStyle:{
      borderWidth: 1,
      borderColor: "#DDDDDD",color:"black",
      backgroundColor:"#c1d8dd",
      borderRadius: 10,
      alignItems: 'center',
      padding: 6,
      width: "90%",
      height:35,
      fontSize:12,
      marginTop:2,
    },
    statusStyle:{
        borderWidth: 1,
        borderColor: "#DDDDDD",
        fontWeight:"bold",
        color:"black",
        backgroundColor:"#96b6a3",
        borderRadius: 12,
        alignItems: 'center',
        padding: 6,
        width: "78%",
        height:35,
    }
  });
export default categoryCard;