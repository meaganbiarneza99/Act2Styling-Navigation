import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CUISINECLICK</Text>
      <Text style={styles.description}>Where Every Bite Tells a Story!</Text>
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ECE5B6',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    fontStyle: 'italic',
    marginBottom: 30,
    color: '#966F33',
  },
  description: {
    fontSize: 15,
    fontStyle: 'normal',
    marginBottom: 32,
    color: '#335B96'
  },
  loginButton: {
    backgroundColor: '#335B96',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#335B96', 
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingPage;
