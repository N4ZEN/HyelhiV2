import {  Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element'
import {SafeAreaView} from 'react-native-safe-area-context'
import data from '../../assets/data/location'
import { tutorialspec } from '../../assets/colors/theme'
import Animated from 'react-native-reanimated';
const {ITEM_HEIGHT, ITEM_WIDTH, SPACING, RADIUS, FULL_SIZE} = tutorialspec

const List = ({navigation}) => {
  const scrollx = React.useRef(new Animated.Value(0)).current
  return (
    <SafeAreaView style={{flex:1}}>
      <Animated.FlatList
      data={data}
      keyExtractor={item=> item.key}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={FULL_SIZE}
      decelerationRate='fast'
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {x: scrollx}}}],
        {useNativeDriver: true}
      )}
      renderItem={({item, index}) => {
        const inputRange = [
          (index-1) * FULL_SIZE, 
          index* FULL_SIZE, 
          (index+1) * FULL_SIZE
        ]

        const translateX = scrollx.interpolate({
          inputRange,
          outputRange: [ITEM_WIDTH, 0, -ITEM_WIDTH]
        })

        const scale = scrollx.interpolate({
          inputRange,
          outputRange: [1,1.3, 1]
        })

        return <TouchableOpacity onPress={() => {navigation.push('Detail', {item})}} style={styles.itemContainer}>
          <View style={[StyleSheet.absoluteFillObject, {borderRadius: RADIUS, overflow: 'hidden'}]}>
        <SharedElement   
        id={`item.${item.key}.photo`} 
        style = {[StyleSheet.absoluteFillObject]}>
              <Animated.Image 
                source={{uri: item.image}} 
                style={[StyleSheet.absoluteFillObject, 
                  {resizeMode: 'cover', transform: [{scale}],}]} />
        </SharedElement>
            </View>
            <SharedElement id={`item.${item.key}.location`}>
          <Animated.Text style={[styles.location, {transform: [{translateX}],}]}>{item.location}</Animated.Text>
            </SharedElement>
          <View style={styles.daysContainer}>
            <Text style={styles.daysValue}>{item.numberOfDays}</Text>
            <Text style={styles.daysLabel}>days</Text>
          </View>
        </TouchableOpacity>
      }} />
    </SafeAreaView>
  )
}




export default List

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH, 
    height: ITEM_HEIGHT, 
    margin: SPACING,
  },
  location: {
    fontSize: 30,
    color: "#fff",
    fontWeight:'bold',
    width: ITEM_WIDTH* 0.8,
    textTransform: 'uppercase',
    position:'absolute',
    top: SPACING *2,
    left: SPACING*2,
  },
  daysContainer: {
    position:'absolute',
    bottom: SPACING,
    left: SPACING,
    width:52,
    height:52,
    borderRadius: 26,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems:'center',
  },
  daysValue: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 18,
  },
  daysLabel: {
    color: '#fff',
    fontSize:10
  },
})