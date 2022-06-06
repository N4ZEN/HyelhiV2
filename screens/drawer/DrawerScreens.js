import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import {DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, getFocusedRouteNameFromRoute, useIsFocused, useNavigationState, useRoute } from '@react-navigation/native';

// import {AuthContext} from '../../components/auth/context'
import { COLORS, SIZES } from '../../assets/colors/theme';
import profile1 from '../../assets/images/profile.png';
import { LinearGradient } from 'expo-linear-gradient';
// import { auth } from '../../firebase';
// import AsyncStorage from '@react-native-async-storage/async-storage'

AntDesign.loadFont();

const Drawerscreens = (props, {navigation}) => { 
  // const { signOt, user } = React.useContext(AuthContext);
  const [username, setusername] =React.useState('Naza Zuhair');

  // const router = useRoute();

  const [color1, setcolor1] = useState('#066363')
  const [color2, setcolor2] = useState('#529D74')


//   const { state } = props
// const { routes, index } = state; 
// const focusedRoute = routes[index].name;
// // const routeName = getFocusedRouteNameFromRoute(index) ?? 'Feed';

// // const focusedRoute = useNavigationState(props.routes.name)
//   let activeIndex = props.state.index;
//   let activeRouteName = props.state.routes[activeIndex].routeName;

//   const [activeRoute, setActiveRoute] = React.useState('');

//   // const focused = i === state.index;



//   React.useEffect(() => {
//       setActiveRoute(activeRouteName);
//       // console.log(router.name)
//   }, [activeRouteName, activeRoute]);

//   React.useEffect(() => {
//     //console.log(focusedRoute)
//   }, [activeRoute])

//   // useEffect(() => {
//   //   const focusListener = navigation.getFocusedRouteNameFromRoute('didFocus', () => {
//   //     console.log(navigation.state.routeName)
//   //   });
   
//   //   return () => focusListener.remove()
//   //  },[navigation])
  
    return (
      <DrawerContentScrollView {...props} 
      contentContainerStyle= {{flex: 1}}
        screenOptions={{
          scrollEnabled: false ,
          
          
        }}
      >
        <View 
          style={{flex:1,
          
          }}>
            <LinearGradient style={{ marginTop:-30, height: 270, borderBottomRightRadius:20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            
            elevation: 7,}} colors={[ color1, color2]}>

              {/* CLose */}
              <View
              style ={{
                  paddingTop: 30,
                  marginLeft: 20, 
                  alignItems: 'flex-start',
                  justifyContent: 'center', 
              }}>
                  <TouchableOpacity
                  style ={{
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}
                  onPress= {() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
                      <Feather name="x" size={25} color={COLORS.white} />
                  </TouchableOpacity>
              </View>
              {/* Profile */}
              <TouchableOpacity
              style ={{
                  alignItems: 'center',
                  marginTop: 10, 
                  marginBottom: 22,
              }}
              onPress={() => props.navigation.navigate('Profile')}>
                <View style={{backgroundColor: COLORS.lightGray, opacity: 0.6, width: 110, 
                height: 110, borderRadius: 150/2, alignItems: 'center', justifyContent: 'center', marginBottom: 10,}}>
                  <MaterialIcons name='person-outline' size={60} color='#fff' style={{padding:10, }}/>
                </View>
                  {/* <Image
                  source = {profile1}
                  style ={{width: 100,
                      height: 100, 
                      borderRadius: 14,}}/> */}
                  <View style = {{marginLeft: 5}}>
                      <Text style ={{color: COLORS.white, fontFamily: 'PoppinsMedium', fontSize: 14, alignSelf: 'center',}}>email@email.com</Text>
                      <Text style ={{color: COLORS.white, fontFamily: 'PoppinsBold', fontSize: 18, alignSelf: 'center',}}>Username</Text>
                  </View>
              </TouchableOpacity>
              </LinearGradient>

                    {/*Drawer items */}
          <View style = {{marginTop: 10}}>
            <DrawerItem
              label={({focused}) => <Text style={{...styles.drawerLabel, color: focused? 'green' : COLORS.darkGray2}}>Dashboard</Text>}
               focused={props.state.index === props.state.routes.findIndex(e => e.name === "Dashboard")}             
              activeTintColor='white'
              onPress={() => props.navigation.navigate('Home')}
              icon={({focused}) => <AntDesign name="home" color={focused? "green": 'black'} size={19} />}
            />
            <DrawerItem
              label={({focused}) => <Text style={{...styles.drawerLabel, color: focused? 'green' : COLORS.darkGray2}}>Explore Map</Text>}
              focused={props.state.index === props.state.routes.findIndex(e => e.name === "Maps")}              
              activeTintColor='white'
              inactiveTintColor='green'
              labelStyle={styles.drawerLabel}
              onPress={() => props.navigation.navigate('Maps')}
              icon={({focused}) => <MaterialIcons name="map" color={focused? "green": 'black'} size={19} />}
            />
            <DrawerItem
              label={({focused}) => <Text style={{...styles.drawerLabel, color: focused? 'green' : COLORS.darkGray2}}>Settings</Text>}
              focused={props.state.index === props.state.routes.findIndex(e => e.name === "Setting")}              
              activeTintColor='white'
              labelStyle={styles.drawerLabel}
              onPress={() => props.navigation.navigate('Settings')}
              icon={({focused}) => <AntDesign name="setting" color={focused? "green": 'black'} size={19} />}
            />
            <DrawerItem
              label={({focused}) => <Text style={{...styles.drawerLabel, color: focused? 'green' : COLORS.darkGray2}}>About</Text>}
              focused={props.state.index === props.state.routes.findIndex(e => e.name === "About")}              
              labelStyle={styles.drawerLabel}
              onPress={() => props.navigation.navigate('About')}
              icon={({focused}) => <Feather name="external-link" color={focused? "green": 'black'} size={19} />}
            />
            <DrawerItem
            label={({focused}) => <Text style={{...styles.drawerLabel, color: focused? 'green' : COLORS.darkGray2}}>Help Center</Text>}
            focused={props.state.index === props.state.routes.findIndex(e => e.name === "Help Center")}              
            labelStyle={styles.drawerLabel}
              onPress={() => props.navigation.navigate('HelpCenter')}
              icon={({focused}) => <MaterialIcons name="headset" color={focused? "green": 'black'} size={19} />}
            />
          </View>
        </View>
        {/*Logout */}
        <View 
        style={{
          marginBottom: 50,
        }} >
          <DrawerItem
            label="Logout"
            labelStyle={{ color: 'black', marginLeft: -16 }}
            icon={() => <AntDesign name="logout" color="black" size={16} />}
            onPress={() => Alert.alert(
              "Log out",
              "Are you sure you want to log out?",
              [
                // The "Yes" button
                {
                  text: "Yes",
                  onPress: () => {
                    // handleSignOut();     
                               },
                },
                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                  text: "No",
                },
              ]
            )}
            // onPress={() => handleSignOut()}
          />
        </View>
      </DrawerContentScrollView>
    );
};


const styles = StyleSheet.create({
  drawerStyles: { flex: 1, width: '70%', backgroundColor: 'white'  },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { 
    marginTop: 2, 
    marginLeft: -16, 
    fontFamily: "PoppinsRegular",
    fontSize: 16,
  },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
  },
})


export default Drawerscreens;
