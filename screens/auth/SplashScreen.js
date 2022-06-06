import {View, StyleSheet, Text, ImageBackground, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {LinearGradient} from 'expo-linear-gradient';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import { COLORS, SIZES, colour } from '../../assets/colors/theme';
import logo from '../../assets/icons/drawer.png' ;
import TextButton from '../../components/auth/TextButton';
import logo1 from '../../assets/images/logo1.png'
import { Feather, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const SplashScreen = ({ navigation }) => {
  return (
      <LinearGradient style={{flex:1,}} colors={['#0A6453', '#4D8C81']}>
            <SafeAreaView style={{flex: 1,}}>
          <TouchableOpacity style = {{flex: 1}} 
         // onPress={() => navigation.navigate('OnboardingUI')}
          >
          <View style={{flex: 1, position: 'absolute', top: '50%', alignSelf: 'center'}}>
            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
            <Image source={logo1} style={{height: 130, width: 150, resizeMode: 'contain'}} />
            <Text style={styles.heylhiText}>Heylhi</Text>
            <Text style={styles.heylhiTextDescr}>For flooding and erosion tracking</Text>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
        </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    heylhiText: {
        fontFamily: 'PoppinsSemiBold',
        color: COLORS.black,
        fontSize: 30,
        paddingVertical: 10,
    },
    heylhiTextDescr: {
        fontFamily: 'PoppinsMedium',
        color: COLORS.black,
        fontSize: 17,
    },
})