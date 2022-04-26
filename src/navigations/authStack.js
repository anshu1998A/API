import { View, Text } from 'react-native'
import React from 'react';
import LogIn from '../screens/LogIn/LogIn'
import navigationString from './navigationString';
import SignUp from '../screens/SignUp/SignUp';

export default function authStack(Stack) {
  return (
    <>
   <Stack.Screen name ={navigationString.LOGIN} component = {LogIn} />
   <Stack.Screen name = {navigationString.SIGNUP} component = {SignUp} />
    </>
  )
}