import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/colors/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FormInput from '../../components/forms/FormInput';
import frame from '../../assets/images/frame.png'

import grown from '../../assets/icons/grown.png'
import narrow from '../../assets/icons/narrow.png'
import nochange from '../../assets/icons/nochange.png'
import selected from '../../assets/icons/selected.png'
import grownDark from '../../assets/icons/grownDark.png'
import narrowDark from '../../assets/icons/narrowDark.png'
import nochangeDark from '../../assets/icons/nochangeDark.png'
import selectedDark from '../../assets/icons/selectedDark.png'

const Erosion = ({navigation}) => {
  const [markerType, setMarkerType] = useState('frame')
  const [dateTime, setDateTime] = useState()
  const [distance, setDistance] = useState()
  const [heightConvsn, setHeightConvsn] = useState('m')
  const [vegetationToggle, setVegetationToggle] = useState(false)
  const [buildingsAffectedToggle, setBuildingsAffectedToggle] = useState(false)
  const [comment, setComment] = useState()
  const [beachChanged, setBeachChanged] = useState('')

  const toggleVegetationSwitch = () => setVegetationToggle(previousState => !previousState);
  const togglebuldingsSwitch = () => setBuildingsAffectedToggle(previousState => !previousState);

  function handleHeightConv() {
      if (heightConvsn === 'm'){
          setHeightConvsn('ft')
          // if (weights != '') {
          //     let inkg = Math.round(((Number(weights)*2.205)  + Number.EPSILON) * 10) / 10
          //     setWeights(inkg.toString())
          // }
      }else if (heightConvsn === 'ft'){
          setHeightConvsn('m') 
          // if (weights != '') {
          //     let inkg = Math.round(((Number(weights)/2.205)  + Number.EPSILON) * 10) / 10
          //     setWeights(inkg.toString())
          // }
      }  
  }


  return (
    <SafeAreaView style={{flex:1}}>
      {/* Header */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <MaterialIcons 
          name = 'navigate-before'
          size={35}
          color='#000'
          style={{paddingHorizontal: 10, paddingVertical:18 }} 
          onPress={() => navigation.goBack()}/>
          <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 19, color:COLORS.black, paddingVertical:20,}}>Coastal Record</Text>
          <View style={{padding:30,}}/>
      </View>

      {/* marker type */}
      <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <TouchableOpacity 
          onPress={() => {
            setMarkerType('FreeRoaming')
          }}
          style={{backgroundColor: (markerType === 'FreeRoaming') ? '#FFE4BB': COLORS.lightGray1, borderRadius: 25, padding:3, paddingHorizontal:20,}}>
            <Text style={{fontFamily: 'PoppinsMedium', fontSize:14, color: COLORS.black}}>Free Roaming Marker</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            setMarkerType('frame')
          }}
          style={{backgroundColor: (markerType === 'frame') ? COLORS.lightblue4: COLORS.lightGray1, borderRadius: 25, padding:3, paddingHorizontal:20,}}>
            <Text style={{fontFamily: 'PoppinsMedium', fontSize:14, color: COLORS.black}}>Frame</Text>
          </TouchableOpacity>
      </View>
        

        {/* input form */}
      <ScrollView style={{flex:1,marginHorizontal:10}}>

      {(markerType === 'FreeRoaming') &&
      <View>

        {/* map */}
        <View style={{marginTop:30}}>
          <Text style={{ color: COLORS.black,
                    fontFamily: 'PoppinsSemiBold',
                    fontSize: 14,
                    paddingLeft: 5,}}>Location</Text>
          <TouchableOpacity style={{backgroundColor: COLORS.lightGray1, width: Dimensions.get('window').width-30, alignSelf: 'center', height: 200, padding: 20, }}>
            <Text>Map</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 5,}}>
            <View style={{height:20,width:20, backgroundColor: COLORS.lightGray1, borderRadius: 2}}>
              </View>
            <Text style={{ color: COLORS.black,
                    fontFamily: 'PoppinsSemiBold',
                    fontSize: 13.5,
                    paddingLeft: 5,}}>Confirm Location</Text>
          </View>
        </View>

        {/* Upload Photo */}
        <View style={{marginTop: 30, marginBottom: 10}}>
        <Text style={{ color: COLORS.black,
                    fontFamily: 'PoppinsSemiBold',
                    fontSize: 14,
                    paddingLeft: 5,}}>Upload Photo</Text>
        
        <View style={{flexDirection: 'row'}}>
          <MaterialIcons name='stay-current-landscape' size={20} color={COLORS.darkGray} style={{paddingHorizontal:5,}}/>
          <Text style={{ fontSize:14, color: COLORS.darkGray}}>Please ensure photo is taken in landscape mode</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 10, height:101,width:SIZES.width*0.75, backgroundColor: COLORS.lightGray1, borderRadius: 8}}/>
          <View style={{flexDirection: 'column',}}>
            <TouchableOpacity style={{width:SIZES.width* 0.15, backgroundColor: COLORS.lightblue4, borderRadius: 4, height:45, alignItems: 'center', justifyContent: 'center'}}>
            <MaterialIcons name='image' size={35} color={COLORS.black} style={{paddingHorizontal:5,}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:SIZES.width* 0.15, backgroundColor: COLORS.lightblue4, borderRadius: 4, marginTop:10, height:45, alignItems: 'center', justifyContent: 'center'}}>
            <MaterialIcons name='add-a-photo' size={35} color={COLORS.black} style={{paddingHorizontal:5,}}/>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      
      </View>
      }

      {(markerType === 'frame') && 
        <View>

          {/* Frame Details*/}
          <TouchableOpacity 
            style={{backgroundColor: '#92CAE8', borderRadius: 20,
            marginTop:20,padding: 10,}}
          >
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image source={frame} style={{height:70, width: 70, resizeMode: 'contain'}}/>
              </View>
              <View style={{flexDirection: 'column', }}>
                <Text style={{fontFamily: 'PoppinsMedium', fontSize: 14, color: COLORS.black, marginLeft:5,}}>Location Name/Number</Text>
                <View style={{flexDirection: 'row'}}>
                  <MaterialIcons name='place' size={20} color={COLORS.darkGray} />
                  <Text>Vaikaradhoo, Haa Dhaalu Atoll</Text>
                </View>
                  <Text style={{marginLeft:5}}>Coordinates: 19.002, 139.011</Text>
              </View>
            </View>


          </TouchableOpacity>

           {/* Upload Photo */}
        <View style={{marginTop: 30, marginBottom: 10}}>
        <Text style={{ color: COLORS.black,
                    fontFamily: 'PoppinsSemiBold',
                    fontSize: 14,
                    paddingLeft: 5,}}>Upload Photo</Text>
        
        <View style={{flexDirection: 'row'}}>
          <MaterialIcons name='stay-current-landscape' size={20} color={COLORS.darkGray} style={{paddingHorizontal:5,}}/>
          <Text style={{ fontSize:14, color: COLORS.darkGray}}>Please ensure photos are taken in landscape mode</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: SIZES.width *0.8}}>
            <View style={{flexDirection: 'column', }}>
              <View style={{marginLeft: 10, height:90, width: SIZES.width* 0.25, backgroundColor: COLORS.lightGray1, borderRadius: 8}}/>
              <Text style={{fontFamily: 'PoppinsRegular',fontSize:13, textAlign: 'center'}}>Frame 1</Text>
            </View>
            <View style={{flexDirection: 'column', }}>
              <View style={{marginLeft: 10, height:90, width: SIZES.width* 0.25, backgroundColor: COLORS.lightGray1, borderRadius: 8}}/>
              <Text style={{fontFamily: 'PoppinsRegular',fontSize:13, textAlign: 'center'}}>Frame 2</Text>
            </View>
            <View style={{flexDirection: 'column', }}>
              <View style={{marginLeft: 10, height:90, width: SIZES.width* 0.25, backgroundColor: COLORS.lightGray1, borderRadius: 8}}/>
              <Text style={{fontFamily: 'PoppinsRegular',fontSize:13, textAlign: 'center'}}>Frame 3</Text>
            </View>
           </View>
          <View style={{flexDirection: 'column',}}>
            <TouchableOpacity style={{width:SIZES.width* 0.125, backgroundColor: '#FFEDD7', borderRadius: 4, height:45, alignItems: 'center', justifyContent: 'center'}}>
            <MaterialIcons name='image' size={30} color={COLORS.black} style={{paddingHorizontal:5,}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:SIZES.width* 0.125, backgroundColor:  '#FFEDD7', borderRadius: 4, marginTop:8, height:45, alignItems: 'center', justifyContent: 'center'}}>
            <MaterialIcons name='add-a-photo' size={30} color={COLORS.black} style={{paddingHorizontal:5,}}/>
            </TouchableOpacity>
          </View>
        </View>
        </View>

        {/* How do you think coast has changed */}
        <View style={{marginBottom:10}}>
            <Text style={{ color: COLORS.black,
              fontFamily: 'PoppinsSemiBold',
              fontSize: 14,
              paddingLeft: 5, marginRight: 3,}}>How do you think the beach has changed since last update?</Text>
            <View style={{flexDirection: 'row', flexGrow: 1,}}>
              <TouchableOpacity 
                onPress={() => setBeachChanged('narrow')}
                style={{width:90,height:80, borderRadius: SIZES.radius, flexDirection: 'column', paddingBottom: 15,
                  backgroundColor:  (beachChanged === 'narrow') ? COLORS.lightblue4 : '#FFEDD7', alignItems: 'center', justifyContent: 'center', marginLeft: 25 }}>
                <Image source={(beachChanged === 'narrow') ?selectedDark: narrowDark} style={{width: 80, height: 80, resizeMode: 'contain'}}/>
                <View style={{marginTop: -15}}>
                  <Text style={{fontFamily: 'PoppinsMedium',fontSize: 12, color: COLORS.black}}>Narrowed</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setBeachChanged('grown')}
                style={{width:90,height:80, borderRadius: SIZES.radius, flexDirection: 'column', paddingBottom: 15,
                  backgroundColor: (beachChanged === 'grown') ? COLORS.lightblue4: '#FFEDD7' , alignItems: 'center', justifyContent: 'center', marginLeft: 25 }}>
                <Image source={(beachChanged === 'grown') ?selectedDark: grownDark} style={{width: 80, height: 80, resizeMode: 'contain'}}/>
                <View style={{marginTop: -15}}>
                  <Text style={{fontFamily: 'PoppinsMedium',fontSize: 12, color: COLORS.black}}>Grown</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => setBeachChanged('nochange')}
                style={{width:90,height:80, borderRadius: SIZES.radius, flexDirection: 'column', paddingBottom: 15,
                  backgroundColor: (beachChanged === 'nochange') ? COLORS.lightblue4 : '#FFEDD7', alignItems: 'center', justifyContent: 'center', marginLeft: 25 }}>
                <Image source={(beachChanged === 'nochange') ?selectedDark: nochangeDark} style={{width: 80, height: 80, resizeMode: 'contain'}}/>
                <View style={{marginTop: -15}}>
                  <Text style={{fontFamily: 'PoppinsMedium',fontSize: 12, color: COLORS.black}}>No Change</Text>
                </View>
            </TouchableOpacity>
          </View>
        </View>

        </View>
      }


        {/* Date and Time of Data Collection ---Temporary---- */}
        <FormInput 
          style = {styles.input}
          inputStyle = {{color: COLORS.black}}
          placeholder= {"Date and Time photo was taken"}
          editable = {true}
          label={'Date and Time'}
          value={dateTime }
          onChangeText={(value) => {setDateTime(value)}}
          />

         {/* Distance form marker */}
         <FormInput
            containerStyle = {{paddingBottom: 5,}}    
            style = {styles.input}
            inputStyle = {{color: COLORS.black}}
            keyboardType = 'numeric'
            label = "Shoreline distance from marker"
            placeholder= { "Distance"}
            editable = {true}
            value={distance}
            onChangeText={(value) => {setDistance(value)}}               
            appendComponent =
            {
                <TouchableOpacity onPress = {() => handleHeightConv()} 
                  style = {{flexDirection : 'row', paddingVertical: 15,}} >
                    <Text style = {(heightConvsn == 'ft') ? styles.mftgray : styles.mftblack}>m</Text>
                    <Text style = {(heightConvsn == 'm') ? styles.mftgray : styles.mftblack}>/ft</Text>
                </TouchableOpacity>
            } 
        />

        {/* vegetation affected */}
        <View style={{marginBottom:10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ color: COLORS.black,
              fontFamily: 'PoppinsSemiBold',
              fontSize: 14,
              paddingLeft: 5,}}>Vegetation Affected</Text>
            <Switch
              trackColor={{ false: '#767577', true:COLORS.lightblue4 }}
              thumbColor={vegetationToggle ? '#6063C2' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleVegetationSwitch}
              value={vegetationToggle}
              />
          </View>
          <View style={{marginTop:-20}}>
            <Text  style={{ color: COLORS.black,
              fontFamily: 'PoppinsRegular',
              fontSize: 13,
              paddingLeft: 15,}}>Add photos</Text>
            <TouchableOpacity style={{width:50,height:50, borderRadius: SIZES.radius, 
                backgroundColor: COLORS.lightGray1, alignItems: 'center', justifyContent: 'center', marginLeft: 25 }}>
                <MaterialIcons name='add' size={30} color={COLORS.black}/>
            </TouchableOpacity>
          </View>
        </View>

                {/* buildings affected */}
                <View style={{marginBottom:10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{ color: COLORS.black,
              fontFamily: 'PoppinsSemiBold',
              fontSize: 14,
              paddingLeft: 5,}}>buildings Affected</Text>
            <Switch
              trackColor={{ false: '#767577', true:COLORS.lightblue4 }}
              thumbColor={buildingsAffectedToggle ? '#6063C2' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglebuldingsSwitch}
              value={buildingsAffectedToggle}
              />
          </View>
          <View style={{marginTop:-20}}>
            <Text  style={{ color: COLORS.black,
              fontFamily: 'PoppinsRegular',
              fontSize: 13,
              paddingLeft: 15,}}>Add photos</Text>
            <TouchableOpacity style={{width:50,height:50, borderRadius: SIZES.radius, 
                backgroundColor: COLORS.lightGray1, alignItems: 'center', justifyContent: 'center', marginLeft: 25 }}>
                <MaterialIcons name='add' size={30} color={COLORS.black}/>
            </TouchableOpacity>
          </View>
        </View>

                {/* Additional Comments */}
        <FormInput
          styleMain={{height:80, alignItems: 'baseline', paddingTop: 8,}} 
          style = {styles.input}
          inputStyle = {{color: COLORS.black}}
          placeholder= {"Comments.."}
          editable = {true}
          multiline={true}
          label={'Additional Information'}
          value={comment }
          onChangeText={(value) => {setComment(value)}}
          />

           {/* Footer */}
        <View>
          <TouchableOpacity 
            onPress={() => {}}
            style={{backgroundColor: COLORS.lightblue4, borderRadius: 99, paddingVertical:5, paddingHorizontal:20,marginBottom: 15, marginHorizontal: 15, marginTop: 100,}}>
              <Text style={{fontFamily: 'PoppinsSemiBold', fontSize:17, color: COLORS.black, alignSelf: 'center'}}>Submit</Text>
            </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default Erosion

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: COLORS.lightGray2,
    backgroundColor: COLORS.lightGray2,
    
    padding: 10,
    borderRadius: 6,
    marginVertical: 5,
},
inputStyle: {
    color: COLORS.black,
    fontFamily: 'PoppinsRegular',
    fontSize: 14, 
},
mftgray: {
  color: COLORS.darkGray2,

},
mftblack: {
  color: COLORS.black,
  fontWeight: 'bold'
},
})