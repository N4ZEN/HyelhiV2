import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/colors/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FormInput from '../../components/forms/FormInput';
import RangeSlider, { Slider } from 'react-native-range-slider-expo';

const Flooding = ({navigation}) => {
  const [floodType, setFloodType] =useState('coastal')
  const [location, setLocation] =useState()
  const [time, setTime] =useState()
  const [floodHeight, setFloodHEight] =useState()
  const [heightConvsn, setHeightConvsn] = useState('m')
  const [PropertiesAffected, setPropertiesaffected] =useState()
  const [damageSeverity, setDamageSeverity] =useState(0)
  const [comment, setComment] =useState()



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
          <Text style={{fontFamily: 'PoppinsSemiBold', fontSize: 19, color:COLORS.black, paddingVertical:20,}}>Create Flooding Record</Text>
          <View style={{padding:30,}}/>
      </View>

      {/* flood type */}
      <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <TouchableOpacity 
          onPress={() => {
            setFloodType('coastal')
          }}
          style={{backgroundColor: (floodType === 'coastal') ? '#FFE4BB': COLORS.lightGray1, borderRadius: 25, padding:3, paddingHorizontal:20,}}>
            <Text style={{fontFamily: 'PoppinsMedium', fontSize:14, color: COLORS.black}}>Coastal flooding</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => {
            setFloodType('flood')
          }}
          style={{backgroundColor: (floodType === 'flood') ? COLORS.lightblue4: COLORS.lightGray1, borderRadius: 25, padding:3, paddingHorizontal:20,}}>
            <Text style={{fontFamily: 'PoppinsMedium', fontSize:14, color: COLORS.black}}>Flash flooding</Text>
          </TouchableOpacity>
      </View>

          {/* input details */}
          <ScrollView style ={{flex:1}}>
      <View style={{flex:1,marginHorizontal:10,  marginTop: 30,}}>
        
          {/* Location */}
        {/* <FormInput 
          style = {styles.input}
          inputStyle = {{color: COLORS.black}}
          placeholder= {"Location"}
          editable = {true}
          label={'Location'}
          value={location }
          onChangeText={(value) => {setLocation(value)}}
          appendComponent= {
            <MaterialIcons 
            name = 'navigate-next'
            size={35}
            color='#000'/>
          }
          /> */}
          <View style={{marginTop:-20,  marginBottom: 10,}}>
          <Text style={{ color: COLORS.black,
              fontFamily: 'PoppinsSemiBold',
              fontSize: 14,
              paddingLeft: 5,}}>Location</Text>
            <TouchableOpacity style={{width:SIZES.width-28,height:60, borderRadius: SIZES.radius, 
                backgroundColor: COLORS.lightGray1, justifyContent: 'center', marginHorizontal: 4, }}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 10, }}>
                  <Text style={{fontFamily: 'PoppinsRegular', color: COLORS.darkGray2, fontSize: 14, paddingTop: 5}}>Select Location</Text>
                <MaterialIcons name='chevron-right' size={35} color={COLORS.black}/>
                  </View>
            </TouchableOpacity>
            </View>

          {/* Date and Time of Data Collection ---Temporary---- */}
        <FormInput 
          style = {styles.input}
          inputStyle = {{color: COLORS.black}}
          placeholder= {"Date and Time of data collection"}
          editable = {true}
          label={'Date and Time'}
          value={time }
          onChangeText={(value) => {setTime(value)}}
          />

          {/* Height of flood */}
        <FormInput
            containerStyle = {{paddingBottom: 5,}}    
            style = {styles.input}
            inputStyle = {{color: COLORS.black}}
            keyboardType = 'numeric'
            label = "Height of Flood"
            placeholder= { "Height"}
            editable = {true}
            value={floodHeight}
            onChangeText={(value) => {setFloodHEight(value)}}               
            appendComponent =
            {
                <TouchableOpacity onPress = {() => handleHeightConv()} 
                  style = {{flexDirection : 'row', paddingVertical: 15,}} >
                    <Text style = {(heightConvsn == 'ft') ? styles.mftgray : styles.mftblack}>m</Text>
                    <Text style = {(heightConvsn == 'm') ? styles.mftgray : styles.mftblack}>/ft</Text>
                </TouchableOpacity>
            } 
        />

          {/* Affected Properties */}
        {/* <FormInput 
          style = {styles.input}
          inputStyle = {{color: COLORS.black}}
          placeholder= {"Select Properties"}
          editable = {true}
          label={'Properties Affected'}
          value={PropertiesAffected }
          onChangeText={(value) => {setPropertiesaffected(value)}}
          appendComponent= {
            <MaterialIcons 
            name = 'expand-more'
            size={35}
            color='#000'/>
          }
          /> */}

<View style={{marginTop:-20,  marginBottom: 10, marginTop: 1}}>
          <Text style={{ color: COLORS.black,
              fontFamily: 'PoppinsSemiBold',
              fontSize: 14,
              paddingLeft: 5,}}>Properties Affected</Text>
            <TouchableOpacity style={{width:SIZES.width-28,height:60, borderRadius: SIZES.radius, 
                backgroundColor: COLORS.lightGray1, justifyContent: 'center', marginHorizontal: 4, }}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:20, paddingRight: 10, }}>
                  <Text style={{fontFamily: 'PoppinsRegular', color: COLORS.darkGray2, fontSize: 14, paddingTop: 5}}>Select Properties</Text>
                <MaterialIcons name='expand-more' size={35} color={COLORS.black}/>
                  </View>
            </TouchableOpacity>
            </View>

          {/* severity of damage */}
          <View>
            <Text style={{ color: COLORS.black,
                    fontFamily: 'PoppinsSemiBold',
                    fontSize: 14,
                    paddingLeft: 5,}}>Severity of Damage</Text>
          <View style = {{flexDirection: 'row', marginRight: 10, }}>
              <Slider
                  style={{width: Dimensions.get('window').width - 80,  }}
                  styleSize={'small'}
                  valueLabelsBackgroundColor={COLORS.lightblue2}
                  step={1}
                  min={1}
                  max={10}
                  initialValue={0}
                  valueOnChange={(value) => setDamageSeverity(value)}
                  knobColor={'#1D4383'}
                  inRangeBarColor={'#BED7F6'}
                  outOfRangeBarColor={'#1D4383'}
                  />
            <Text style = {{fontFamily: 'PoppinsSemiBold', fontSize: 16, color: COLORS.black, alignSelf: 'center', marginLeft: -5,}}>{damageSeverity}</Text>
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
        
        {/* Add photos ----Temporary------ */}
        <FormInput
          styleMain={{width: 60, paddingLeft: 10, paddingRight: 10}} 
          editable = {false}
          label={'Add Photos'}
          appendComponent= {
            <MaterialIcons 
            name = 'add'
            size={35}
            color='#000'/>
          }
          />
      </View>

      {/* Footer */}
        <View>
          <TouchableOpacity 
            onPress={() => {}}
            style={{backgroundColor: COLORS.lightblue4, borderRadius: 99, paddingVertical:5, paddingHorizontal:20,marginBottom: 15, marginHorizontal: 15, marginTop: 50,}}>
              <Text style={{fontFamily: 'PoppinsSemiBold', fontSize:17, color: COLORS.black, alignSelf: 'center'}}>Submit</Text>
            </TouchableOpacity>
        </View>

      </ScrollView>
      <View>

      </View>
    </SafeAreaView>
  )
}

export default Flooding

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