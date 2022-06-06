import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {TouchableOpacity} from 'react-native-gesture-handler'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/colors/theme';
import RadioButtonRN from 'radio-buttons-react-native-expo';
import { DrawerActions } from '@react-navigation/native';

const Filter2 = ({navigation}) => {
  const [selectedfilter, setselectFilter] = useState('1');

const data = [
  {
    label: 'All Markers',
    accessibilityLabel: '1'
  },
  {
    label: 'Frames',
    accessibilityLabel: '2'
  },
  {
    label: 'My Markers',
    accessibilityLabel: '3'
  },
];


  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
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
      <Text style={{fontFamily: 'PoppinsBold', fontSize: 28, color: '#000', marginLeft:50, width: 180,}}>Filter Markers</Text>
      </View>

      <View style={{ marginLeft:30, marginTop:10, }}>
        <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 19, color: '#000',}}>Filter by:</Text>
        <View>
        <RadioButtonRN
          data={data}
          box={false}
          circleSize={15}
          initial={1}
          textStyle={{fontFamily: 'PoppinsRegular', color: COLORS.darkGray, fontSize:16}}
          selectedBtn={(e) => setselectFilter(e)}
        />
        </View>
      </View>

      <View style={{marginHorizontal: 20, marginTop:30,}}>
        <View style={{marginBottom: 10}}>
          <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS.black, fontSize:16}}>Location:</Text>

          <View style = {{flexDirection: 'row',}}>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 17, color: COLORS.darkGray, marginTop: 10}}>Atoll:  </Text>
          <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10,}}>
          <Text style={{fontFamily: 'PoppinsRegular', color: COLORS.darkGray2, fontSize:16}}>Haa Dhaalu</Text>
          <MaterialIcons name='expand-more' size={30} color={COLORS.darkGray2}/>
          </View>
          <View style={{width:SIZES.width -100, height: 3, backgroundColor: COLORS.darkGray1}}/>
        </View>
          </View>

          <View style = {{flexDirection: 'row',}}>
            <Text style={{fontFamily: 'PoppinsRegular', fontSize: 17, color: COLORS.darkGray, marginTop: 10}}>Island:  </Text>
          <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 10,}}>
          <Text style={{fontFamily: 'PoppinsRegular', color: COLORS.darkGray2, fontSize:16}}>Vaikaradhoo</Text>
          <MaterialIcons name='expand-more' size={30} color={COLORS.darkGray2}/>
          </View>
          <View style={{width:SIZES.width -115, height: 3, backgroundColor: COLORS.darkGray1}}/>
        </View>
          </View>

          </View>

        <View style={{marginBottom: 10}}>
          <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS.black, fontSize:16}}>Time</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10,}}>
          <Text style={{fontFamily: 'PoppinsRegular', color: COLORS.darkGray2, fontSize:16}}>Last Week</Text>
          <MaterialIcons name='expand-more' size={35} color={COLORS.darkGray2}/>
          </View>
          <View style={{width:SIZES.width -50, height: 3, backgroundColor: COLORS.darkGray1}}/>
        </View>

        <View>
          <Text style={{fontFamily: 'PoppinsSemiBold', color: COLORS.black, fontSize:16}}>Snap Type</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10,}}>
          <Text style={{fontFamily: 'PoppinsRegular', color: COLORS.darkGray2, fontSize:16}}>Frame</Text>
          <MaterialIcons name='expand-more' size={35} color={COLORS.darkGray2}/>
          </View>
          <View style={{width:SIZES.width -50, height: 3, backgroundColor: COLORS.darkGray1}}/>
        </View>
      </View>


    </SafeAreaView>
  )
}

export default Filter2

const styles = StyleSheet.create({})