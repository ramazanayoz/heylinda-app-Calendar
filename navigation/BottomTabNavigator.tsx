import { AntDesign as Icon } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/Home'
import PlayScreen from '../screens/Play'
import SettingsScreen from '../screens/Settings'
import StatsScreen from '../screens/Stats'
import MyTestScreen from '../screens/MyTest'
import AboutPage from '../screens/Settings/About'
import {
  BottomTabParamList,
  HomeParamList,
  MyTestParamList,
  SettingsParamList,
  StatsParamList,
} from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint, headerShown: false }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="setting" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyTest"
        component={MyTestNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="setting" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon size={25} style={styles.tabBarIcon} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>()

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Colors.light.white,
        }}
      >
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
          }}
        />
        <HomeStack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{
            headerBackTitle: 'Back',
            headerTitle: 'Play',
          }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}

const StatsStack = createStackNavigator<StatsParamList>()

function StatsNavigator() {
  return (
    <StatsStack.Navigator>
      <StatsStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{
          headerTitle: 'Stats',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </StatsStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<SettingsParamList>()

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <SettingsStack.Screen
        name="AboutScreen"
        component={AboutPage}
        options={{
          headerBackTestID: 'headerBack',
          headerTintColor: Colors.light.white,
          headerBackTitle: 'Back',
          headerTitle: 'About',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </SettingsStack.Navigator>
  )
}

const MyTestStack = createStackNavigator<MyTestParamList>()

function MyTestNavigator() {
  return (
    <MyTestStack.Navigator>
      <MyTestStack.Screen
        name="MyTestScreen"
        component={MyTestScreen}
        options={{
          headerTitle: 'MyTest',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </MyTestStack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: '600',
    color: Colors.light.white,
    fontSize: 16,
  },
  header: {
    backgroundColor: Colors.light.primary,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
})
