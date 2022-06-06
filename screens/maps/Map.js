import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import MapView from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/colors/theme';
import { DrawerActions } from '@react-navigation/native';


const Map = ({navigation}) => {
  return (
    <View style={{flex:1,}}>
         <MapView style={{flex: 1, zIndex: -1}} />


        {/* Header */}
        <View style={{zIndex: 10, position: 'absolute'}}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} 
                style={{alignSelf: 'flex-end', flex: 1, zIndex: 10,backgroundColor: '#26A2BE', height: 80, width:50, 
                borderBottomLeftRadius: 10, marginTop: -20, elevation: 13, position: 'absolute', top: 10, left: 10,
                    alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 5}}>
                    <MaterialIcons name ='expand-less' color={COLORS.white} size={40} />
                </TouchableOpacity> */}

            <View style={{ flexDirection: 'row', marginTop: 3, paddingLeft: 5,}}>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Image source={require('../../assets/icons/drawerDark.png')} resizeMode='contain' style={{width: 35,  marginLeft:20, marginTop: -50}} />
                </TouchableOpacity>
                <View >
                    <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 19, color:COLORS.black, paddingVertical:35, textAlign: 'center', alignSelf: 'center', paddingHorizontal: 110}}>Map</Text>
                </View>
            </View>
        </View>
        <View style={{alignSelf: 'flex-end', flex: 1, zIndex: 10,position : 'absolute', top: -50, right: 0, elevation: 13,}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} 
                style={{backgroundColor: '#26A2BE', height: 80, width:50, 
                borderBottomLeftRadius: 10, marginTop: 40, 
                    alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 5}}>
                    <MaterialIcons name ='expand-less' color={COLORS.white} size={40} />
                </TouchableOpacity>

        </View>
        

    </View>
  )
}

export default Map

const styles = StyleSheet.create({})