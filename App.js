import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import Credentials
  from './components/Credentials';

export default function App() {
  const [FullName, SetFullName] = useState("");
  const [Email, SetEmail] = useState("");
  const [BirthDate, SetBirthDate] = useState("");
  const [Address, SetAddress] = useState("");
  const [Password, SetPassword] = useState("");
  const [Confirm, SetConfirm] = useState("");
  const [Welcome, SetWelcome] = useState("")


  const [FullNameError, SetFullNameError] = useState("");
  const [EmailError, SetEmailError] = useState("");
  const [BirthDateError, SetBirthDateError] = useState("");
  const [AddressError, SetAddressError] = useState("");
  const [PasswordError, SetPasswordError] = useState("");
  const [ConfirmError, SetConfirmError] = useState("");
  const [WelcomeError, SetWelcomeError] = useState("")


  const [Credentials, SetCredentials] = useState()
  function VerifEmail(Email) {
    return true
  }

  function Login() {
    SetCredentials()
    if (FullName == "") {
      SetFullNameError('Full Name not valid')
    }
    if (Email == "") {
      SetEmailError('Email not valid')
    }
    if (BirthDate == "") {
      SetBirthDateError('Birth Date not valid')
    }
    if (Address == "") {
      SetAddressError('Address not valid')
    }
    if (Password == "") {
      SetPasswordError('Password not valid')
    }
    if (Confirm != Password) {
      SetConfirmError("Confirmed Password doesn't match Password")
    }
    else {
      SetWelcome("Welcome " + FullName)
      SetCredentials("Name: " + FullName + "\nEmail: " + Email + "\nAddress: " + Address + "\nBirth Date: " + BirthDate)
    }
  }
  return (
    < View style={styles.container} >
      <Text style={{ fontSize: 45, alignSelf: 'flex-start', marginLeft: 30, marginBottom: 10 }}>Sign up</Text>
      <TextInput style={styles.inputField} placeholder='Full Name' onChangeText={SetFullName} value={FullName}></TextInput>
      <Text style={styles.error}>{FullNameError}</Text>
      <TextInput style={styles.inputField} placeholder='Email' onChangeText={SetEmail} value={Email}></TextInput>
      <Text style={styles.error}>{EmailError}</Text>
      <TextInput textContentType='birthdate' style={styles.inputField} placeholder='Date of Birth' onChangeText={SetBirthDate} value={BirthDate}></TextInput>
      <Text style={styles.error}>{BirthDateError}</Text>
      <TextInput textContentType='addressCity' style={styles.inputField} placeholder='Address' onChangeText={SetAddress} value={Address}></TextInput>
      <Text style={styles.error}>{AddressError}</Text>
      <TextInput secureTextEntry style={styles.inputField} placeholder='Password' onChangeText={SetPassword} value={Password}></TextInput>
      <Text style={styles.error}>{PasswordError}</Text>
      <TextInput secureTextEntry style={styles.inputField} placeholder='Confirm Password' onChangeText={SetConfirm} value={Confirm}></TextInput>
      <Text style={styles.error}>{ConfirmError}</Text>
      <Button style={{ color: 'black' }} title='Register' onPress={() => Login()}></Button>
      <Text style={{ color: 'green' }}>{Welcome}</Text>
      <StatusBar style="auto" />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    padding: 5,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    width: 300,
    height: 50,
    backgroundColor: 'white'
  },
  error: {
    fontSize: 12,
    justifyContent: 'flex-start',
    color: 'red',
  }
});
