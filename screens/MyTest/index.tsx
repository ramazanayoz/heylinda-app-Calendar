import { StackNavigationProp } from '@react-navigation/stack'
import { MyTestParamList } from '../../types'
import { Divider, List } from 'react-native-paper'
import * as React from 'react'

interface Props {
  navigation: StackNavigationProp<MyTestParamList, 'MyTestScreen'>
}

const MyTest = ({ navigation }: Props) => {
  console.log(navigation)
  return (
    <>
      <List.Item title="Clear Data" />
      <Divider />
      <List.Item title="Privacy Policy" />
      <Divider />
    </>
  )
}

export default MyTest
