import { View, Text, Image, TextInput} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


export default function Header() {

    const {user}=useUser();

  return (
    <View style={{
      padding:moderateScale(15),
      paddingTop:moderateScale(45),
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
      }}>
        <Image source={{uri:user?.imageUrl}}
            style={{
              width: scale(45),
              height: verticalScale(45),
              borderRadius:moderateScale(99),
            }}
        />
        <View>
          <Text style={{fontFamily:'outfit2'}}>Welcome</Text>
          <Text style={{
            fontSize:20,
            fontFamily:'outfit2'
          }}>{user?.fullName}</Text>
        </View>
      </View>
      <View>
        {/* Search Bar */}
        <View style={{
          display:'flex',
          flexDirection:'row',
          gap:12,
          alignItems:'center',
          padding:moderateScale(13),
          // marginVertical:10,
          marginTop:moderateScale(15),
          borderColor:'orange',
          borderWidth:1,
          borderRadius:17,
          backgroundColor:'#fff'
        }}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput placeholder='Search'
          style={{
            color:'black',
            fontSize:18,
          }}
          />
        </View>
      </View>
    </View>  
  )
} 