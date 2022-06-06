import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import MapView from 'react-native-maps';
import {SafeAreaView} from 'react-native-safe-area-context'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/colors/theme';
import { DrawerActions } from '@react-navigation/native';
import FAB from 'react-native-fab'

const Map2 = ({navigation}) => {
  return (
    <View style={{flex:1,}}>
         <MapView style={{flex: 1, zIndex: -1}} />


        {/* Header */}
        <View style={{width: SIZES.width, zIndex: 10, position: 'absolute', top: 6,}}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} 
                style={{alignSelf: 'flex-end', flex: 1, zIndex: 10,backgroundColor: '#26A2BE', height: 80, width:50, 
                borderBottomLeftRadius: 10, marginTop: -20, elevation: 13, position: 'absolute', top: 10, left: 10,
                    alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 5}}>
                    <MaterialIcons name ='expand-less' color={COLORS.white} size={40} />
                </TouchableOpacity> */}

            <View style={{ flexDirection: 'row',  justifyContent: 'space-between', }}>
                <TouchableOpacity style={{}}
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                    <Image source={require('../../assets/icons/drawerDark.png')} resizeMode='contain' style={{width: 35, height: 50, marginLeft:20, marginTop: 22}} />
                </TouchableOpacity>
                <View style={{}} >
                    <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 19, color:COLORS.black, marginTop:35, textAlign: 'center', alignSelf: 'center', }}>Map</Text>
                </View>
                <TouchableOpacity style={{paddingHorizontal: 10,}}
                    onPress={() => navigation.navigate('Markers')}>
                    <MaterialIcons name='search' size={32} color={COLORS.black} style={{marginTop:35,}} />
                </TouchableOpacity>
            </View>
        </View>
        {/* <View style={{alignSelf: 'flex-end', flex: 1, zIndex: 10,position : 'absolute', top: -50, right: 0, elevation: 13,}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} 
                style={{backgroundColor: '#26A2BE', height: 80, width:50, 
                borderBottomLeftRadius: 10, marginTop: 40, 
                    alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 5}}>
                    <MaterialIcons name ='expand-less' color={COLORS.white} size={40} />
                </TouchableOpacity>

        </View> */}
        

                    {/* FAB add location button */}  
                      
                <View style={{
                    position: 'absolute',
                    bottom:40,
                    right: 1,
                    //width: 30,
                }}>
                    <FAB
                        buttonColor={COLORS.white}
                        onClickAction={() => {} }
                        visible={true}
                        iconTextColor={COLORS.black}
                        iconTextComponent={<Feather name="plus" color={COLORS.black} size={35} />}
                    />
                </View>
              

            {/* my location button*/} 
              
                <View style={{
                    position: 'absolute',
                    bottom: 110,
                    right: 1,
                }}>
                    <FAB
                        buttonColor={COLORS.white}
                       // onClickAction={() => setshowmaparr(false)}
                        visible={true}
                        iconTextColor={COLORS.black}
                        iconTextComponent={<MaterialIcons name="my-location" color={COLORS.black} size={35} />}
                    />
                </View>

            {/* filter map button*/} 
              
            <View style={{
                    position: 'absolute',
                    bottom: 40,
                    left:95,
                }}>
                    <FAB
                        buttonColor={COLORS.white}
                        onClickAction={() => navigation.navigate('Filter')}
                        visible={true}
                        iconTextColor={COLORS.black}
                        iconTextComponent={<MaterialIcons name="filter-alt" color={COLORS.black} size={40} />}
                    />
                </View>

            

    </View>
  )
}

export default Map2

const styles = StyleSheet.create({})