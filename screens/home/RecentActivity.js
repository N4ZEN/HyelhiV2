import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {TouchableOpacity} from 'react-native-gesture-handler'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/colors/theme';
import filter from '../../assets/icons/filter.png'
import flooding from '../../assets/icons/flooding.png'
import erosion from '../../assets/icons/erosion.png'

const RecentActivity = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{marginTop: 0, padding: 25, paddingLeft: 5, }}
        onPress={() => navigation.goBack()}>
            <MaterialIcons name='chevron-left' size={40} color={COLORS.black}  />
        {/* <Image source={require('../../assets/icons/drawerDark.png')} resizeMode='contain' style={{width: 35, padding: 10, marginLeft:20, }} /> */}
    </TouchableOpacity>
    <View style={{marginLeft: 40, marginTop: -10, flexDirection: 'row', justifyContent: 'space-between',}}>
     <Text style={{fontFamily: 'PoppinsBold', fontSize: 25, color: '#000', width: 250}}>Recent Activity</Text>
     <TouchableOpacity style={{marginRight: 20, backgroundColor: '#B5DEFD', height: 40, width: 40, borderRadius: 999, alignItems:'center', justifyContent: 'center',}}>
      {/* <MaterialIcons name='expand-more' size={35} color={COLORS.black}/> */}
        <Image source={filter} style={{height: 30, width: 30, resizeMode: 'contain'}}/>
      </TouchableOpacity>
    </View>

    <View style={{marginLeft: 30, marginTop: 0,}}>
        <View style={{flexDirection: 'row', marginVertical : 10, }}>
          <TouchableOpacity style={{width: 60, height: 60, borderRadius: 10,
          backgroundColor: '#FFE0B9', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={erosion}
                style={{height: 50, width: 50, resizeMode: 'contain'}}
                />
            {/* <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS. black, fontSize: 20}}>1</Text> */}
          </TouchableOpacity>
          <View style={{marginLeft: 20, paddingTop: 5,}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 15, color: COLORS.black}}>Location name + co-ordinates</Text>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, color: COLORS.darkGray}}>Activity type: Erosion</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginVertical : 10, }}>
          <TouchableOpacity style={{width: 60, height: 60, borderRadius: 10,
          backgroundColor: '#FFE0B9', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={flooding}
                style={{height: 50, width: 50, resizeMode: 'contain'}}
                />
            {/* <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS. black, fontSize: 20}}>2</Text> */}
          </TouchableOpacity>
          <View style={{marginLeft: 20, paddingTop: 5,}}>
            <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 15, color: COLORS.black}}>Location 2</Text>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 13, color: COLORS.darkGray}}>Activity type: Flooding</Text>
          </View>
        </View>
    </View>
    
    </SafeAreaView>
  )
}

export default RecentActivity

const styles = StyleSheet.create({})