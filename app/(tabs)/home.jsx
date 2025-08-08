import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from  '../../components/Home/Header1'
import Slider from '../../components/Home/Slider1'
import Category from '../../components/Home/Category1'
import NextAppoinmentCard from '../../components/Home/NextAppoinmentCard1'



export default function home() {
  return (
    <View>
      {/* header */}
        <Header/>
        <ScrollView>
        {/* Popular Categories */}
        <Category/>
      {/* health Tips */}
      <Slider/> 
      {/* Next appoinment*/}
       <NextAppoinmentCard/>
      {/* Next Appointment */}
      </ScrollView>
    </View>
  )
}