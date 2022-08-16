import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Headers'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }: { navigation: any }) {
  return (
    <Background>
      <Logo />
      <Header>IIIT Una</Header>
      <Paragraph>
        The gate management system for IIIT Una.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
