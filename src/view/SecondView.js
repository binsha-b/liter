import React, { useState } from 'react';
import {View,Text,StyleSheet,Input,TouchableOpacity,TextInput,Button,Image, Platform,
  PermissionsAndroid,SafeAreaView} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//import {SelectList }from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const UselessTextInput = (props) => { 
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={540}
    />
  );
}
 const SecondView= () => {
  const [filePath, setFilePath] = useState({});
 
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
 
  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);
 
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };
 
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };








  const downIcon = <Icon name="chevron-down" size={15} color="#fc6203" />;
  //const upIcon = <Icon name="chevron-up" size={15} color="#fc6203" />;
  const camera = <Icon name="camera" size={15} color="black" />;
  
  
    
  const [shouldShow, setShouldShow] = useState(true);
  const [notes, setNotes] = useState('');
 
    const [value, onChangeText] = React.useState('Type Here...');

  
    return(
      <View style={{paddingHorizontal:40,marginTop:20}}>
        <TouchableOpacity style={styles.dropdown} onPress={() => setShouldShow(!shouldShow)} >
          <Text style={{color:'black'}}> Canopy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{downIcon}</Text>

          {shouldShow ? (
            
          <TouchableOpacity  style={styles.drpdownlist}>
             <Text style={{color:'black'}}> General Site{'\n'}</Text>
             <Text style={{color:'black',fontSize:13}}>Wearing official uniform  &nbsp;&nbsp;&nbsp;
             <TouchableOpacity style={styles.ansBtn}><Text style={{color:'black',fontSize:10}}>Good</Text></TouchableOpacity>
             &nbsp;&nbsp;&nbsp;
             <TouchableOpacity style={styles.ansBtn}><Text style={{color:'black',fontSize:10}}>Notgood</Text></TouchableOpacity>
         </Text>
             <Text> {'\n'}</Text>
             <Text style={{color:'black'}}>Notes </Text>
             <View
                style={{
                  backgroundColor: "#D3D3D3",
                  borderColor: '#D3D3D3',
                  borderWidth: 0,
                  borderRadius:10,
                }}>
              <UselessTextInput multiline  numberOfLines={4} onChangeText={text => onChangeText(text)} value={value}  
              style={{padding: 0,width:550}}  />
             </View>
            
             

             <Image
          source={{uri: filePath.uri}}
          style={styles.imageStyle}
        />
        <Text style={styles.textStyle}>{filePath.uri}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          {camera}
        </TouchableOpacity>
             
            </TouchableOpacity >
        ) : null }
            
           





        </TouchableOpacity>
        

<TouchableOpacity style={styles.doneBtn}>
  <Text style={{cursor:'pointer',color:'white'}}>Done</Text>
</TouchableOpacity> 





      
     
   

      </View>
      
    )
};
const styles = StyleSheet.create({
    dropdown: {
      width:"100%",
      borderColor:'black',
      height: 40,
      margin: 0,
      borderWidth: 1,
      padding: 4,
      borderRadius:10,
      textAlign: 'right',
      marginTop:10,
    },
    drpdownlist: {
      width:"100%",
      borderColor:'black',
      height: 250,
      margin: 0,
      borderWidth: 1,
      padding: 4,
      borderRadius:10,
      textAlign: 'right',
      marginTop:45,
      position:'absolute'
      
    },
  doneBtn: {
    width:"100%",
    borderRadius:10,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:"100%",
    backgroundColor:"#fc6203",
    fontSize: 20,
 },
 ansBtn: {
  marginLeft:50,
  borderRadius:10,
  alignItems: "center",
  backgroundColor: "#DDDDDD",
  padding: 4,
  width:"30%",
},


textStyle: {
  //padding: 10,
  color: 'black',
  textAlign: 'center',
},
buttonStyle: {
  alignItems: 'center',
  backgroundColor: '#DDDDDD',
  padding: 5,
  //marginVertical: 10,
  width: 50,
  marginTop:-20,
},
imageStyle: {
  width: 20,
  height:10,
  margin: 1,
  
},
   
  });

export default SecondView;
