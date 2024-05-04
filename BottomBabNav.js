import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from "@rneui/themed";
import Menu from './Menu';
import Login from './login';
import FoodFilter from './FoodFilter';
import FastImage from 'react-native-fast-image';

const Home = () => {

  return (
    
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

function HomeData() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen </Text>
    </View>
  );
}

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search Screen </Text>
    </View>
  );
}

function Center() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CenterScreen </Text>
    </View>
  );
}

function Movies() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movies Screen</Text>
    </View>
  );
}

function TvShows() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TV Shows </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle:{backgroundColor:'#1B1F24',paddingBottom:10,paddingTop:10,height:60},
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'white'
    }}
    >
      <Tab.Screen name='Home' component={HomeData} options={{
        tabBarIcon:({ color, size }) => (
          <Icon
            name="home"
            type="antdesign"
            color={color}
            size={size}
          />
        ),
      }} />
      <Tab.Screen name='Search' component={Search} options={{
        tabBarIcon:({ color, size }) => (
          <Icon name="search" color={color} size={size} />
        ),
      }} />
      <Tab.Screen  name='Center' component={Center} options={{
        tabBarIcon:({ color, size }) => (
          <FastImage
          source={require('../assets/gifs/Arrow.gif')}
          style={{
            height: normalize(40),
            width: normalize(40),
            borderRadius: 50,
            marginTop:10,
          }}
          resizeMode="cover"
        />
        ),
        tabBarLabel: '',
        
      }} />
      <Tab.Screen name='Movies' component={Movies} options={{
        tabBarIcon:({ color, size }) => (
          <Image
            style={{
              height: 18,
              width: 15,
              marginLeft:8,
              tintColor:color,
            }}
            source={require('../assets/images/Movies.png')}
            resizeMode="contain"
          />
        ),
      }} />
      <Tab.Screen name='TV Shows' component={TvShows} options={{
        tabBarIcon:({ color, size }) => (
          <Icon
            name="tv-outline"
            type="ionicon"
            color={color}
            size={size}
          />
        ),
      }} />
    </Tab.Navigator>
  );
}

export default Home

const styles = StyleSheet.create({

});
