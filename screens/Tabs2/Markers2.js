import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {TouchableOpacity} from 'react-native-gesture-handler'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/colors/theme';
import filter from '../../assets/icons/filter.png'
import { DrawerActions } from '@react-navigation/native';
import FormInput from '../../components/forms/FormInput';

const Markers2 = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity style={{paddingLeft: 5, marginTop: 2,}}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Image source={require('../../assets/icons/drawerDark.png')} resizeMode='contain' style={{width: 35,  marginLeft:15, marginTop: -70}} />
      </TouchableOpacity>
      <TouchableOpacity style ={{flexGrow: 1, alignItems: 'flex-end',}}
        onPress={() => navigation.navigate('Profile')}>
        <MaterialIcons name='person-outline' size={40} color='#000' style={{padding:10, marginTop: 10, marginRight: 10 }}/>
    </TouchableOpacity>
    </View>

      <View style={{marginTop: -60}}>
        <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS.darkGray3, letterSpacing: 0.2, fontSize: 16, marginLeft: 48, marginBottom: -5}}> Location: Vaikaradhoo</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 30,}}>

      <Text style={{fontFamily: 'PoppinsBold', fontSize: 28, color: '#000', marginLeft:50, width: 200,}}>Markers</Text>
      <TouchableOpacity style={{backgroundColor: '#B5DEFD', height: 50, width: 50, borderRadius: 999, alignItems:'center', 
      justifyContent: 'center', marginTop: 0, marginBottom: 0, alignSelf: 'flex-end',}}>
      {/* <MaterialIcons name='expand-more' size={35} color={COLORS.black}/> */}
        <Image source={filter} style={{height: 35, width: 35, resizeMode: 'contain'}}/>
      </TouchableOpacity>
      </View>
      <FormInput 
       placeholder={'Search'} 
       styleMain={{marginHorizontal: 15, marginBottom: 20, marginTop: -20, backgroundColor: 'transparent', borderBottomColor: COLORS.black, borderBottomWidth: 2,}}/>
      </View>

      <View style={{marginLeft: 30, marginTop: -10,}}>

        <View style={{flexDirection: 'row', marginVertical : 10, }}>
          <TouchableOpacity style={{width: 60, height: 60, borderRadius: 10,
          backgroundColor: '#FFE0B9', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS. black, fontSize: 20}}>1</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 20, paddingTop: 5,}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 15, color: COLORS.black}}>Marker 1</Text>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, color: COLORS.darkGray}}>Marker 1 location</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginVertical : 10, }}>
          <TouchableOpacity style={{width: 60, height: 60, borderRadius: 10,
          backgroundColor: '#FFE0B9', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS. black, fontSize: 20}}>2</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 20, paddingTop: 5,}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 15, color: COLORS.black}}>Marker 2</Text>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, color: COLORS.darkGray}}>Marker 2 location</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginVertical : 10, }}>
          <TouchableOpacity style={{width: 60, height: 60, borderRadius: 10,
          backgroundColor: '#FFE0B9', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS. black, fontSize: 20}}>3</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 20, paddingTop: 5,}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 15, color: COLORS.black}}>Marker 3</Text>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, color: COLORS.darkGray}}>Marker 3 location</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginVertical : 10, }}>
          <TouchableOpacity style={{width: 60, height: 60, borderRadius: 10,
          backgroundColor: '#FFE0B9', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS. black, fontSize: 20}}>4</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 20, paddingTop: 5,}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 15, color: COLORS.black}}>Marker 4</Text>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, color: COLORS.darkGray}}>Marker 4 location</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginVertical : 10, }}>
          <TouchableOpacity style={{width: 60, height: 60, borderRadius: 10,
          backgroundColor: '#FFE0B9', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS. black, fontSize: 20}}>5</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 20, paddingTop: 5,}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 15, color: COLORS.black}}>Marker 5</Text>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, color: COLORS.darkGray}}>Marker 5 location</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginVertical : 10, }}>
          <TouchableOpacity style={{width: 60, height: 60, borderRadius: 10,
          backgroundColor: '#FFE0B9', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS. black, fontSize: 20}}>6</Text>
          </TouchableOpacity>
          <View style={{marginLeft: 20, paddingTop: 5,}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 15, color: COLORS.black}}>Marker 6</Text>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, color: COLORS.darkGray}}>Marker 6 location</Text>
          </View>
        </View>


      </View>
    </SafeAreaView>
  )
}

export default Markers2

const styles = StyleSheet.create({})