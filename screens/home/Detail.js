import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import {SharedElement} from 'react-navigation-shared-element'
import {AntDesign} from '@expo/vector-icons'
import {SafeAreaView} from 'react-native-safe-area-context'
import { tutorialspec } from '../../assets/colors/theme'
const {ITEM_HEIGHT, ITEM_WIDTH, SPACING, RADIUS, FULL_SIZE} = tutorialspec

const Detail = ({navigation, route}) => {
    const {item} = route.params
  return (
        <SafeAreaView style={{flex:1}}>
            <AntDesign 
                name = 'arrowleft'
                size={30}
                color='#fff'
                style={{padding: SPACING, position: 'absolute', top: 50, left: 10, zIndex:2}} 
                onPress={() => navigation.goBack()}/>
            <View style= {[StyleSheet.absoluteFillObject]}>
                <SharedElement 
                id={`item.${item.key}.photo`} 
                style = {[StyleSheet.absoluteFillObject, {resizeMode: 'cover'}]}>

                <Image 
                    source={{uri: item.image}} 
                    style={[StyleSheet.absoluteFillObject, {resizeMode: 'cover',}]} />
        </SharedElement>
            </View>
            <SharedElement id={`item.${item.key}.location`}>
                <Text style={styles.location}>{item.location}</Text>
            </SharedElement>
        </SafeAreaView>
  )
}


  const styles = StyleSheet.create({
      location: {
          fontSize: 30,
          color: "#fff",
          fontWeight:'bold',
          width: ITEM_WIDTH*0.8,
          textTransform: 'uppercase',
          position:'absolute',
          top: 100,
          left: SPACING *2,
      },
  })


  Detail.sharedElements= (route) => {
    const {item} = route.params;
  
    return [
      {
        id: `item.${item.key}.photo`, 
        animation: 'move',
        resze: 'clip',
        
      },
      {
        id: `item.${item.key}.location`
      },
    ]
  
  }

export default Detail
