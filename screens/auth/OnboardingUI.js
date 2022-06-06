import { StyleSheet, Text, View, FlatList, Image, Dimensions, Animated } from 'react-native'
import React, { useRef } from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../assets/colors/theme';
import onboardingData from '../../assets/data/onboardingData';
import TextButton from '../../components/auth/TextButton'


const width = Dimensions.get('window').width
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.85;

const Circle = ({scrollX}) => {

    return <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
        {onboardingData.map((item, index) => {
            const inputRange =[((item.key-1) - 0.55) * SIZES.width, (item.key-1) * SIZES.width, ((item.key -1) + 0.55) * SIZES.width];
            const scale = scrollX.interpolate({
                inputRange, 
                outputRange: [0, 1, 0],
                extrapolate: 'clamp',
            })
            const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 0.3, 0],
            })
            return <Animated.View key={index} 
            style={[styles.circle, {backgroundColor: item.color, opacity, transform: [{scale}]}]} />
        })}
    </View>
}

const Ticker = ({scrollX}) => {
    const inputRange= [-width, 0, width]
    const translateY = scrollX.interpolate({
        inputRange,
        outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT]
    })
    return <View style={styles.tickerContainer}>
        <Animated.View style={{transform: [{translateY}]}}>
            {onboardingData.map(({type}, index) => {
                return <Text key={index} style={styles.tickerText}>{type}</Text>
            })}
        </Animated.View>
    </View>
}


const Item = ({item, index, scrollX}) => {
    const inputRange = [(item.key - 2) * SIZES.width, (item.key-1) * SIZES.width, ((item.key -1) + 1) * SIZES.width];
    const inputRangeOpacity = [((item.key -1) - 0.3) * SIZES.width, (item.key-1) * SIZES.width, ((item.key -1) + 0.3) * SIZES.width];
    const scale = scrollX.interpolate({
        inputRange,
        outputRange : [0,1,0]
    })
    const translateXHeading = scrollX.interpolate({
        inputRange, 
        outputRange: [SIZES.width * 0.1, 0, -SIZES.width* 0.1]
    })
    const translateXDescription = scrollX.interpolate({
        inputRange, 
        outputRange: [SIZES.width * 0.7, 0, -SIZES.width* 0.7]
    })
    const opacity = scrollX.interpolate({
        inputRange: inputRangeOpacity,
        outputRange: [0,1,0]
    })

    return(
        <View style ={styles.itemStyle}>
            <Animated.Image source={item.imageuri} 
            style={[styles.imageStyle, {transform: [{scale}]}]}/>
            <View style={styles.textContainer}>
                <Animated.Text style={[styles.heading, {opacity, transform: [{translateX: translateXHeading}]}]}>{item.heading}</Animated.Text>
                <Animated.Text style={[styles.description, {opacity, transform: [{translateX: translateXDescription}]}]}>{item.description}</Animated.Text>
            </View>
        </View>
    )
}

const Pagination = ({scrollX}) => {
    const inputRange= [-width, 0, width]
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: [-DOT_SIZE, 0, DOT_SIZE]
    })
    return(
        <View style={styles.pagination}>
            <Animated.View style={[styles.paginationIndicator, {
                position: 'absolute',
                transform: [{translateX }]
            }]} />
            {onboardingData.map((item) => {
                return(
                    <View key={item.key} style={styles.pagDotContainer}>
                        <View style={[styles.paginationDot, {backgroundColor: item.color}]} />
                    </View>
                )
            })}
        </View>
    )
}

const OnboardingUI = ({navigation}) => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = React.useRef()
    const [currentIndex, setCurrenIndex] =React.useState(0)

    const onViewChangeRef = React.useRef(({ viewableItems, changed}) => {
        setCurrenIndex(viewableItems[0].index)
    })
  
    return (
    <SafeAreaView style={styles.container}>
        <Circle scrollX={scrollX} />
        <Animated.FlatList
        ref={flatListRef}
            data={onboardingData}
            keyExtractor={(item) => item.key}
            renderItem={(item, index) => 
                <Item {...item} index={index} scrollX={scrollX}/>
            }
            pagingEnabled
            onViewableItemsChanged= {onViewChangeRef.current}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
                [{ nativeEvent: {contentOffset: {x: scrollX }}}],
                {useNativeDriver: false}
            )}
            scrollEventThrottle={16}
        />
        <View style={{backgroundColor: COLORS.white}}>
        {/* <Image 
            style={styles.logo}
            source={require('../../assets/images/heylhi.png')}
            /> */}
            </View>
        <Pagination scrollX={scrollX}/>
        <Ticker scrollX={scrollX} />



        {/*Button */}
        {currentIndex !== onboardingData.length -1 && 
        <View style = {{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding,
            paddingTop:10,
            marginVertical: SIZES.padding
        }}>
            <TextButton label = 'Skip' 
            buttonContainerStyle={{
                backgroundColor: null
            }} 
            labelStyle ={{
                color: COLORS.darkGray2,
                paddingTop: 25,
            }}
         //   onPress={() => navigation.replace("Welcome")} 
         />

            <TextButton label = 'Next' 
            buttonContainerStyle={{
                height:60, 
                width: 200, 
                borderRadius: SIZES.radius
            }} 
            
            onPress={() => {

                    flatListRef?.current?.scrollToIndex({
                        index: currentIndex +1,
                        animated: true
                    }) 

            }} />
        </View>
        }

        {(currentIndex === onboardingData.length-1) &&
            <View style ={{
                paddingHorizontal: SIZES.padding,
                marginVertical: SIZES.padding
            }}>
                <TextButton label = "Let's Get Started!"
                    buttonContainerStyle = {{
                        height: 60,
                        borderRadius: SIZES.radius 
                    }}
                    labelStyle ={{
                        color: COLORS.white
                    }}
                    onPress = {() => navigation.replace("SignIn")} 
                />
            </View>
        }
    </SafeAreaView>
  )
}

export default OnboardingUI

const styles = StyleSheet.create({
    container: {
        flex:1, 
    },
    itemStyle: {
        width: SIZES.width,
        height: SIZES.height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: SIZES.width *0.8,
        height: SIZES.height *0.8,
        resizeMode: 'contain',
        flex:1,
    },
    textContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-end',
        flex: 0.5,
    },
    heading: {
        fontFamily: 'PoppinsSemiBold',
        color: '#444',
        textTransform: 'capitalize',
        fontSize: 24,
        fontWeight: '800',
        letterSpacing: 0.5,
        marginBottom: 5,
    },
    description: {
        fontFamily: 'PoppinsRegular',
        color: '#ccc',
        fontWeight: '600',
        textAlign: 'left',
        width: SIZES.width *0.75,
        marginRight: 10,
        fontSize:16,
        lineHeight: 16*1.5,
    },
    logo: {
        opacity: 0.9,
        height: LOGO_HEIGHT,
        width: LOGO_WIDTH,
        resizeMode: 'contain',
        position: 'absolute',
        left: 10,
        bottom: 10,
        transform: [
            {translateX: -LOGO_WIDTH / 2},
            {translateY: -LOGO_HEIGHT / 2},
            {rotateZ: '-90deg' },
            {translateX: LOGO_WIDTH / 2},
            {translateY: LOGO_HEIGHT / 2},
        ],
    },
    pagination: {
        position: 'absolute',
        right: 20,
        bottom: 100,
        flexDirection: 'row',
        height: DOT_SIZE,
    },
    paginationIndicator: {
        width: DOT_SIZE,
        height: DOT_SIZE,
        borderRadius: DOT_SIZE /2,
        borderWidth: 2, 
        borderColor: '#ddd'
    },
    paginationDot: {
        width: DOT_SIZE*0.3,
        height: DOT_SIZE*0.3,
        borderRadius: DOT_SIZE *0.15,
    },
    pagDotContainer: {
        width: DOT_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: DOT_SIZE /2,
    },
    tickerContainer: {
        position: 'absolute',
        top: 40,
        left: 20,
       // backgroundColor: COLORS.green,
        overflow: 'hidden',
        height: TICKER_HEIGHT,
    },
    tickerText: {
        fontSize: TICKER_HEIGHT,
        lineHeight: TICKER_HEIGHT,
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontFamily: 'PoppinsBold',
        paddingTop: 2,
        fontSize: 38,
    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    }, 
    circle: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        position: 'absolute',
        top: '15%'
    },
})