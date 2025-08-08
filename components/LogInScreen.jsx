import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useWarmUpBrowser } from './../hooks/useWarmUpBrowser'
import * as WebBrowser from  "expo-web-browser"
import { useOAuth } from '@clerk/clerk-expo'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// Autentication
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
    useWarmUpBrowser();
    
    const { startOAuthFlow} = useOAuth({ strategy: "oauth_google"});

    const onPress = React.useCallback(async () => {
      try {
        const {createdSessionId, signIn, signUp, setActive }=
        await startOAuthFlow();

        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as WFA
        }
      } catch (err) {
        console.error('OAuth error', err);
      }
    }, []);

    
  return (
    <View>
      
      <Image  source={require('./../assets/images/qd1.png')}
      style={{
        marginTop:'10%',
        width:scale(350),
        alignItems:'center',
        display:'flex',
        height:verticalScale(300),
        borderRadius:20,
        borderWidth: 2,
        borderColor:'white'
      }}
      />
      <View style={styles.subContainer}>
        <Text style={{
            fontSize: 35,
            textAlign: 'center',
            letterSpacing:2,
            fontFamily:'outfit2',
        }}>Welcome To Your <Text style={{fontSize:35, color:'blue', fontFamily:'outfit'}}>    NUMBER ONE MEDICAL AID APP</Text> </Text>
        <Text style={{
            fontSize:18, 
            textAlign:'center',
            marginVertical:35,
            color:'gray',
            fontFamily:'outfit1'
            }}>Book your appointment with health experts near you and get the best Medical care </Text>
      </View>
      
      <View>
            <TouchableOpacity style={styles.btn}
            onPress={onPress}
            >
              <Text style={{
                textAlign:'center',
                fontFamily:'outfit'
              }}>LET'S GET STARTED</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    subContainer: {
        backgroundColor:'#fff',
        padding: moderateScale(15),
        marginTop:-30,
    },
    btn: {
      display:'flex',
      backgroundColor:'orange',
      borderRadius:99,
      marginTop:30,
      padding:moderateScale(25),
      width:verticalScale(270),
      alignSelf:'center',
    }
})

