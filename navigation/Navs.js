import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { Feather, AntDesign, MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';



import Map2 from '../screens/Tabs2/Map2';

import Home from '../screens/home/Home';
import RecentActivity from '../screens/home/RecentActivity';
import Erosion from '../screens/erosion/Erosion'
import Flooding from '../screens/flooding/Flooding'
import Filter from '../screens/maps/Filter';
import Map from '../screens/maps/Map';
import Markers from '../screens/maps/Markers';

import OnboardingUI from '../screens/auth/OnboardingUI';
import Welcome from '../screens/auth/Welcome';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';

import HelpCenter from '../screens/drawer/HelpCenter';
import Settings from '../screens/drawer/Settings';
import Profile from '../screens/drawer/Profile';
import About from '../screens/drawer/About';
import Drawerscreen from '../screens/drawer/DrawerScreens';

import { COLORS, SIZES } from '../assets/colors/theme';

import Home2 from '../screens/Tabs2/Home2';
import Filter2 from '../screens/Tabs2/Filter2';
import Markers2 from '../screens/Tabs2/Markers2';
import SplashScreen from '../screens/auth/SplashScreen';

import {AuthContext} from '../components/auth/Context'

import {enableScreens} from 'react-native-screens'
import {createSharedElementStackNavigator} from 'react-navigation-shared-element'
import {NavigationContainer} from '@react-navigation/native'
import Animated, {Easing } from 'react-native-reanimated';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CardStyleInterpolators } from '@react-navigation/stack';
import {createDrawerNavigator, useDrawerProgress} from "@react-navigation/drawer";
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const options = () => ({
  gestureEnabled: false,
  headerShown: false,
  haederBackTitleVisible: false,
  transitionSpec: {
    open: {
      animation: 'timing',
      config: { duration: 100, easing: Easing.inOut(Easing.ease)},
    },
    close: {
      animation: 'timing',
      config: { duration: 300, easing: Easing.inOut(Easing.ease)},
    },
  },
  cardStyleInterpolator: 
  //CardStyleInterpolators.forHorizontalIOS,
  ({current:{ progress}}) => {
    return{
      cardStyle: {
        opacity: progress,
      },
    };
  },
});


const Navs = () => { 

    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null);
    const [isFirstLauch, setFirstLaunch] = React.useState(true);
    const [state, dispatch] = React.useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
            return {
              ...prevState,
              userToken: action.token,
              isLoading: false,
            };
          case 'SIGN_IN':
            return {
              ...prevState,
              isSignout: false,
              userToken: action.token,
            };
          case 'SIGN_OUT':
            return {
              ...prevState,
              isSignout: true,
              userToken: null,
            };
        }
      },
      {
        isLoading: true,
        isSignout: false,
        userToken: null,
      }
    );
  
    React.useEffect(() => {
      // Fetch the token from storage then navigate to our appropriate place
      const bootstrapAsync = async () => {
        let userToken;
  
        try {
          userToken = await SecureStore.getItemAsync('userToken');
        } catch (e) {
          // Restoring token failed
        }
  
        // After restoring token, we may need to validate it in production apps
  
        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      };
  
      bootstrapAsync();
    }, []);
  
    const authContext = React.useMemo(
      () => ({
        signIn: async (data) => {
          // In a production app, we need to send some data (usually username, password) to server and get a token
          // We will also need to handle errors if sign in failed
          // After getting token, we need to persist the token using `SecureStore`
          // In the example, we'll use a dummy token
  
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        },
        signOut: () => dispatch({ type: 'SIGN_OUT' }),
        signUp: async (data) => {
          // In a production app, we need to send user data to server and get a token
          // We will also need to handle errors if sign up failed
          // After getting token, we need to persist the token using `SecureStore`
          // In the example, we'll use a dummy token
  
          dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
        },
      }),
      []
    );
    return (
      <AuthContext.Provider value={authContext}>
      <RootSiblingParent>
        {state.userToken== null? 
          <SplashScreen /> :
        <DrawerScreenss />
        }
      </RootSiblingParent>
      </AuthContext.Provider>
    
  )
}
  
  
  const TabNavigator = () => {
    return(
        <Tab.Navigator 
        initialRouteName='MapMain'
        screenOptions = {{
            tabBarStyle: { alignItems: 'center', borderTopLeftRadius: 30, borderTopRightRadius: 30, height:65, marginTop:-30, 
          //  backgroundColor: '#1D4383' 
          backgroundColor: '#066363',  
        },
            headerShown: false,
            showLabel: true,
        }}>
            
            <Tab.Screen name = "Filter" component={Filter} 
                options={{
                  
                    
                tabBarIcon: ({focused, color}) => (
                 <FontAwesome name="filter" size={34} color={focused? '#FFC05F': COLORS.lightGray1} 
                 style = {{paddingTop: 10,}}/>
                    ),
                    tabBarLabel: ({ focused}) => {
                        return <Text style={focused? {fontFamily: 'PoppinsMedium', fontSize: 11, fontWeight: '600', color: '#FFC05F', paddingBottom: 5,}: 
                        {fontSize: 8, paddingBottom: 3}}>{focused ? "Filter" : null}</Text>
                      }
            }}/> 
          <Tab.Screen name = "MapMain" component={Map} 
                options={{
                  tabBarLabel: ({ focused}) => {
                    return <Text style={focused? {fontFamily: 'PoppinsMedium', fontSize: 11,fontWeight: '600', color: '#FFC05F', paddingBottom: 5,}: 
                    {fontSize: 8, paddingBottom: 3}}>{focused ? "Map" : null}</Text>
                  },
                    tabBarIcon: ({focused, color}) => (
                <MaterialIcons name='explore' size={34} color={focused? '#FFC05F': COLORS.lightGray1}  
                style = {{paddingTop: 10, }}/>
                ),
                // cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
                
            }}/>  
            <Tab.Screen name = "Markers" component={Markers}
                options={{
                tabBarIcon: ({focused, color}) => (
                    <MaterialIcons name="push-pin" size={34} color={focused? '#FFC05F': COLORS.lightGray1}  
                    style = {{paddingTop: 10,}}/>
                ),
                tabBarLabel: ({ focused}) => {
                    return <Text style={focused? {fontFamily: 'PoppinsMedium', fontSize: 11, fontWeight: '600', color: '#FFC05F', paddingBottom: 5,}: 
                    {fontSize: 8, paddingBottom: 3}}>{focused ? "Markers" : null}</Text>
                },
                tabBarLabelPosition: 'above-icon'
            }}/>
        </Tab.Navigator>
    )
};

const TabNavigator2 = () => {
  return(
      <Tab.Navigator 
      initialRouteName='Home'
      screenOptions = {{
          tabBarStyle: { alignItems: 'center', borderTopLeftRadius: 25, borderTopRightRadius: 25, height:58, marginTop:-30, backgroundColor: '#066363' },
          headerShown: false,
          showLabel: true,
      }}>
        <Tab.Screen name = "Home" component={Home2} 
              options={{
              tabBarIcon: ({focused, color}) => (
               <FontAwesome name="home" size={34} color={focused? '#FFC05F': COLORS.lightGray1} 
               style = {{paddingTop: focused?5:  10,}}/>
                  ),
                  tabBarLabel: ({ focused}) => {
                      return <Text style={focused? {fontFamily: 'PoppinsMedium', fontSize: 11, fontWeight: '600', color: '#FFC05F', paddingBottom: 0,}: 
                      {fontSize: 8, paddingBottom: 0}}>{focused ? "Home" : null}</Text>
                    }
          }}/> 
          
          <Tab.Screen name = "Filter" component={Filter2} 
              options={{
              tabBarIcon: ({focused, color}) => (
               <FontAwesome name="filter" size={34} color={focused? '#FFC05F': COLORS.lightGray1} 
               style = {{paddingTop: focused?5:10,}}/>
                  ),
                  tabBarLabel: ({ focused}) => {
                      return <Text style={focused? {fontFamily: 'PoppinsMedium', fontSize: 11, fontWeight: '600', color: '#FFC05F', paddingBottom: 0,}: 
                      {fontSize: 8, paddingBottom: 3}}>{focused ? "Filter" : null}</Text>
                    }
          }}/> 

        <Tab.Screen name = "MapMain" component={Map2} 
              options={{
                tabBarLabel: ({ focused}) => {
                  return <Text style={focused? {fontFamily: 'PoppinsMedium', fontSize: 11,fontWeight: '600', color: '#FFC05F', paddingBottom: 0,}: 
                  {fontSize: 8, paddingBottom: 3}}>{focused ? "Map" : null}</Text>
                },
                  tabBarIcon: ({focused, color}) => (
              <MaterialIcons name='explore' size={34} color={focused? '#FFC05F': COLORS.lightGray1}  
              style = {{paddingTop: focused?5:10, }}/>
              ),
              // cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
              
          }}/>  
          <Tab.Screen name = "Markers" component={Markers2}
              options={{
              tabBarIcon: ({focused, color}) => (
                  <MaterialIcons name="push-pin" size={34} color={focused? '#FFC05F': COLORS.lightGray1}  
                  style = {{paddingTop:focused?5: 10,}}/>
              ),
              tabBarLabel: ({ focused}) => {
                  return <Text style={focused? {fontFamily: 'PoppinsMedium', fontSize: 11, fontWeight: '600', color: '#FFC05F', paddingBottom: 0,}: 
                  {fontSize: 8, paddingBottom: 3}}>{focused ? "Markers" : null}</Text>
              },
              tabBarLabelPosition: 'above-icon'
          }}/>

      </Tab.Navigator>
  )
};

const MainStack = () => {
  return(
    <Stack.Navigator initialRouteName='Tabs2' >
      <Stack.Screen name = 'Welcome' component={Welcome} options = {{headerShown: false}}/>
      <Stack.Screen name = 'SplashScreen' component={SplashScreen} options = {{headerShown: false}}/>
      <Stack.Screen name = 'SignIn' component={SignIn} options = {{headerShown: false}}/>
      <Stack.Screen name = 'SignUp' component={SignUp} options = {{headerShown: false}}/>
      <Stack.Screen name = 'RecentActivity' component={RecentActivity} options = {{headerShown: false, 
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
      <Stack.Screen name = 'OnboardingUI' component={OnboardingUI} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Erosion' component={Erosion} options={options}/>
        <Stack.Screen name = 'Flooding' component={Flooding} options={options}/>
        <Stack.Screen name = 'Tabs2' component={TabNavigator2} options = {{headerShown:false}}/>
      </Stack.Navigator>
  )
}


const DrawerScreenss = ({navigation, animatedStyle}) => {
  
  return(
    <Drawer.Navigator initialRouteName="Dashboard"
        screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerShown: false,
        headerLeft: () => (
          <TouchableOpacity transparent onPress={() => navigation.openDrawer()}>
            <Feather name="menu" size={24} color="black" style={{ paddingHorizontal: 10 }} />
          </TouchableOpacity>
        ),

        
    }}
    
    drawerContent={(props) => {
      //   setTimeout(() => {
      //     setProgress(props.progress)
      // }, 0)
          return <Drawerscreen {...props} />;
      }}>
        <Drawer.Screen name="Dashboard" 
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard'
                    if (routeName == "Dashboard")
                        return ({swipeEnabled: false})
                }}
                 >{props => <MainStack {...props} />}</Drawer.Screen> 
        
        {/* <Stack.Screen name="ProfileScreen" options = {{headerShown: false}}>{props => <ProfileScreen {...props} />}</Stack.Screen>  */}
        <Drawer.Screen name="Profile" options = {{headerShown: false}}>{props => <Profile {...props} />}</Drawer.Screen> 
        <Drawer.Screen name="Maps" options = {{headerShown: false}}>{props => <TabNavigator {...props} />}</Drawer.Screen> 
        <Drawer.Screen name="HelpCenter" options = {{headerShown: false}}>{props => <HelpCenter {...props} />}</Drawer.Screen> 
        <Drawer.Screen name="About" options = {{headerShown: false}}>{props => <About {...props} />}</Drawer.Screen>
        <Drawer.Screen name="Settings" options = {{headerShown: false}}>{props => <Settings {...props} />}</Drawer.Screen>
    </Drawer.Navigator>
   
      // <Animated.View style={{...styles.stack, animatedStyle}}>
      // <Stack.Navigator initialRouteName="Dashboard"
      //     screenOptions={{
      //     headerTransparent: true,
      //     headerTitle: null,
      //     headerShown: false,
      //     headerLeft: () => (
      //       <TouchableOpacity transparent onPress={() => navigation.openDrawer()}>
      //         <Feather name="menu" size={24} color="black" style={{ paddingHorizontal: 10 }} />
      //       </TouchableOpacity>
      //     ),
      // }}>
      //     <Stack.Screen name="Dashboard" 
      //             options={({ route }) => {
      //                 const routeName = getFocusedRouteNameFromRoute(route) ?? 'Dashboard'
      //                 if (routeName == "Dashboard")
      //                     return ({swipeEnabled: false})
      //             }}
      //              >{props => <MainStack {...props} />}</Stack.Screen> 
          
      //     {/* <Stack.Screen name="ProfileScreen" options = {{headerShown: false}}>{props => <ProfileScreen {...props} />}</Stack.Screen>  */}
      //     <Stack.Screen name="Profile" options = {{headerShown: false}}>{props => <Profile {...props} />}</Stack.Screen> 
      //     <Stack.Screen name="Maps" options = {{headerShown: false}}>{props => <TabNavigator {...props} />}</Stack.Screen> 
      //     <Stack.Screen name="HelpCenter" options = {{headerShown: false}}>{props => <HelpCenter {...props} />}</Stack.Screen> 
      //     <Stack.Screen name="About" options = {{headerShown: false}}>{props => <About {...props} />}</Stack.Screen>
      //     <Stack.Screen name="Settings" options = {{headerShown: false}}>{props => <Settings {...props} />}</Stack.Screen>
      // </Stack.Navigator>
      // </Animated.View>
  )
}

const MainDrawer = () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
      inputRange: [0, 1],
      outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };
  // const updateprogress = (prevprops) => {
  //     return(
  //         setProgress(prevstate => prevprops.progress)
  //     )
  // }

  return (

          <Drawer.Navigator initialRouteName="Homes"
                contentContainerStyle={{flex: 1}}
                
              screenOptions={{
                
                // overlayColor:"transparent",
                // drawerType:"slide",
                
                // onscroll: {Animated.event(
                //   [{nativeEvent: {contentOffset: {x: scrollx}}}],
                //   {useNativeDriver: true}
                // )},
               // sceneContainerStyle: { backgroundColor: 'transparent' },
                drawerStyle: styles.drawerStyles,
                
               // activeBackgroundColor: 'transparent',
               drawerInactiveTintColor: 'white',
               drawerActiveTintColor: 'green',
              }}
              drawerContent={(props) => {
              //   setTimeout(() => {
              //     setProgress(props.progress)
              // }, 0)
                  return <Drawerscreen {...props} />;
              }}
          >
              <Drawer.Screen name="Homes" options = {{headerShown: false, drawerActiveTintColor: 'green',  swipeEnabled: false}}>
              {props => <DrawerScreenss {...props}  /> }
              </Drawer.Screen>
          </Drawer.Navigator>
  )
};


  


export default Navs

const styles = StyleSheet.create({  
  tabBar: {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  paddingTop: 5,
  marginTop: -20,
  borderColor: COLORS.white,
  backgroundColor: COLORS.white,
  height: 55,
},
stack: {
  flex: 1,

  shadowColor: "#000",
shadowOffset: {
width: 0,
height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
  // shadowColor: '#FFF',
  // shadowOffset: {
  //   width: 0,
  //   height: 8,
  // },
  // shadowOpacity: 0.44,
  // shadowRadius: 10.32,
  // elevation: 5,

  overflow: 'hidden',
  // borderWidth: 1,
},
drawerStyles: { 
    flex: 1, 
    width: '80%', 
  //  backgroundColor: 'transparent' 
},
drawerItem: { 
  alignItems: 'flex-start', 
  marginVertical: 2, 
},
drawerLabel: { 
  color: 'white', 
  marginLeft: -16 
},
avatar: {
  borderRadius: 60,
  marginBottom: 16,
  borderColor: 'white',
  borderWidth: StyleSheet.hairlineWidth,
},})