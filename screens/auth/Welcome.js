import { StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import welcome from '../../assets/images/welcome.png'
import { COLORS, SIZES, colour } from '../../assets/colors/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1,}}>

    <ImageBackground source={welcome} style= {{flex:1, alignItems: 'center', justifyContent: 'center',}}>
      <Text style={{fontSize: 40, fontFamily: 'serif', color: COLORS.white, fontWeight: 'bold',}}>Heylhi</Text>
    </ImageBackground>
    <View style={{height: 50}}>
      <TouchableOpacity style={{height:50, alignItems: 'center', justifyContent: 'center',}} 
        onPress={() => navigation.navigate('SignIn')}>
          <Text style={{fontSize: 15, fontFamily: 'PoppinsMedium', color:COLORS.black}}>Sign in to your account</Text>
      </TouchableOpacity>

    </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({})