import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Text, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { COLORS, SIZES, colour } from '../../assets/colors/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';


const onboardingData = [
    {
        id: 1,
        mainTitle: 'Erosion',
        title: 'Coastal Erosion',
        color: '#4EA897',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
        bannerImage: require('../../assets/images/erosion2.png'),
    },
    {
        id: 2,
        mainTitle: 'Flooding',
        title: 'Flooding',
        color: '#41B575',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
        bannerImage: require('../../assets/images/flooding.png'),
    },
];


const Home = ({navigation}) => {

    const scrollx = useRef(new Animated.Value(1/2)).current;
    const flatListRef = useRef()
    const [recent, setRecent] = useState(true)

    const [currentIndex, setCurrenIndex] =useState(0)

    const onViewChangeRef = useRef(({ viewableItems, changed}) => {
        setCurrenIndex(viewableItems[0].index)
    })
    const FULL_SIZE=250

    

    const Dots = () => {
        const dotPosition = Animated.divide(scrollx, 270)

        return (
            <View style ={{
                flexDirection: 'row',
                alignItems:'center',
                justifyContent: 'center',
            }}>
                {
                    onboardingData.map((item,index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index -1, index, index + 1],
                            outputRange: ['#92CAE8', '#00AECD', '#92CAE8'],
                            extrapolate: 'clamp'
                        })

                        const dotWidth = dotPosition.interpolate({
                            inputRange: [index -1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: 'clamp'
                        })

                        return (
                            <Animated.View 
                            key={`dot-${index}`}
                            style= {{
                                borderRadius: 5,
                                marginHorizontal: 6,
                                width: dotWidth,
                                height: 10,
                                backgroundColor:item.color,
                            }} />
                        )
                    })
                }
            </View>
        )
    }

    return (
        <View style = {{
            flex:1,
            backgroundColor: COLORS.white,
            zIndex: 1,
        }}>         
           {/* select activity flatlist */}
            <Animated.FlatList 
                ref={flatListRef}
                horizontal 
                pagingEnabled
                data={onboardingData}
                scrollEventThrottle ={8}
                snapToAlignment = 'end'
                showsHorizontalScrollIndicator ={false}
                onScroll = {Animated.event(
                    [
                        {nativeEvent: {contentOffset: { x: scrollx}}}
                    ],
                    {useNativeDriver: false}
                )}
                onViewableItemsChanged= {onViewChangeRef.current}
                keyExtractor = {(item) => `${item.id}`}
                renderItem ={({ item, index}) => {
                    const inputRange = [
                        (index-1) * FULL_SIZE, 
                        index* FULL_SIZE, 
                        (index+1) * FULL_SIZE
                    ]

                    const translateX = scrollx.interpolate({
                        inputRange,
                        outputRange: [200, 0, -200]
                    })
                    const scale = scrollx.interpolate({
                        inputRange,
                        outputRange: [1,1.3, 1]
                    })

                    return(
                        <View 
                            style ={{
                                flex: 2,
                                width: 325,
                            }}>
                                
                            {/*options buttons */}
                            <View style ={{
                                    flex: 1,
                                    marginBottom: 100,
                                    height: Dimensions.get('window').height/1.63 +50
                                }}>
                                <LinearGradient style = {{height: Dimensions.get('window').height/1.63, 
                                    width: 324.99999, alignSelf: 'center' , borderColor: null,
                                    top: -20, elevation:2, borderBottomLeftRadius: (index==0) ?25: null, 
                                    borderBottomRightRadius: (index== 1) ?25: null, paddingBottom: 100,zIndex: 1,}} colors={['#529D74', '#066363']}
                                />
                                <TouchableOpacity
                                    style={{height: 250, 
                                        width: 200,
                                        marginTop: -30,
                                        borderRadius: 20,
                                        marginLeft: (index==0)? 90: 30,
                                        backgroundColor: item.color,
                                        alignItems: 'center',
                                        elevation: 5,
                                        position: 'absolute',
                                        top: 290,
                                        zIndex: 3,
                                    }}
                                    onPress={() => {
                                        if(item.id==1) {
                                            navigation.navigate('Erosion')
                                        }
                                        else if (item.id ==2) {
                                            navigation.navigate('Flooding')
                                        }
                                    }}
                                >
                                    <Animated.Image 
                                        source = {item.bannerImage}
                                        resizeMode ='contain'
                                        style ={{
                                            width: 120,    
                                            height: 200,
                                            resizeMode: 'contain',
                                            transform: [{scale}],
                                        }} 
                                    />
                                    <View>
                                        <Animated.Text style = {{
                                            color: COLORS.white,
                                            fontFamily: 'PoppinsSemiBold',
                                            fontSize: 17,
                                            transform: [{scale}],
                                        }}>{item.mainTitle}</Animated.Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {/*Detail */}
                            <View styles ={{
                                    marginTop: 10,
                                    zIndex: 1,
                                    justifyContent: 'center',
                                    paddingHorizontal: SIZES.radius, 
                            }}>
                                <Animated.Text style= {{
                                    fontFamily: 'PoppinsSemiBold',
                                    paddingLeft: 18,
                                    width: Dimensions.get('window').width,
                                    marginHorizontal:18,
                                    fontSize: 23,
                                    marginLeft: (index === 1)? -14:24,
                                    transform: [{translateX}],
                                }}
                                >{item.title}</Animated.Text>
                                <Animated.Text style = {{
                                    marginTop: 0,
                                    marginHorizontal:12,
                                    color: COLORS.darkGray2,
                                    paddingHorizontal: SIZES.padding,
                                    fontFamily: 'PoppinsRegular',
                                    marginRight:  30,
                                    marginLeft: (index === 1)? -20:18,
                                    fontSize: 14,
                                    transform: [{translateX}],
                                }}
                                >{item.text}</Animated.Text>
                            </View>  
                        </View>
                    )
                }}
            />

            {/* Header */}
            <View style = {{
                position: 'absolute',
                width: Dimensions.get('window').width,
                zIndex: 1,
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                    <TouchableOpacity
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Image source={require('../../assets/icons/drawer.png')} resizeMode='contain' style={{width: 35, padding: 10, marginLeft:20, }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}>
                        <MaterialIcons name='person-outline' size={40} color='#fff' style={{padding:10, marginTop: 20, marginRight: 10 }}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal:30, marginLeft: 50, marginTop: -20}}>
                    <Text style={{fontFamily: 'PoppinsBold', fontSize: 29, color: '#fff', width: 250}}>Choose your activity</Text>
                    <Text style={{fontFamily: 'PoppinsSemiBold', fontSize:16, color: '#C3DBD4'}}> Lorem ipsum dolor sit amet</Text>
                </View>
            </View>


            {/*Footer */}
            <View style= {{
                height: recent? 145: 100,
                marginTop: recent? 0: 0,
                zIndex: 1,
            }}>
                {/*Pagination/ Dots */}
                <View style={{
                    flex:1,
                    justifyContent: 'center',
                }}>
                    <Dots />

                    {/* Recent Activity */}
                    {recent && 
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('RecentActivity')}
                            style={{borderTopColor: COLORS.lightGray2, height: 50, flexDirection: 'row', 
                                justifyContent: 'space-between', alignItems: 'center', borderBottomColor: COLORS.lightGray2, 
                                borderTopWidth: 0.3, borderBottomWidth: 0.3,backgroundColor: COLORS.lightGray1,
                                marginTop:10}}
                        >
                            <Text style={{marginLeft: 10, fontSize: 16, fontFamily: 'PoppinsMedium', color: COLORS.black, padding:10}}>My Recent Activity</Text>
                            <View style={{padding: 5,}}>
                                <MaterialIcons name='chevron-right' size={35} color={COLORS.black}/>
                            </View>
                        </TouchableOpacity>
                    }
                </View>

                {/* go to maps button */}
                <View style ={{alignSelf: 'flex-end'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('MapTabs')}
                        style={{backgroundColor: '#26CB7E', height: 50, width:50, borderTopLeftRadius: 10,
                            alignItems: 'center', justifyContent: 'center'
                    }}>
                        <MaterialIcons name ='expand-more' color={COLORS.white} size={40} />
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
