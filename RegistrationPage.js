import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Join CuisineClick and Taste the Extraordinary! </Text>
      <Text style={styles.description}>Create Account:</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
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
    fontSize: 24,
    marginBottom: 25,
    color: '#335B96',
  },
  description: {
    fontSize: 15,
    color: '#335B96',
    marginBottom: 10,
    marginRight: 225,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: '100%',
  },
  registerButton: {
    backgroundColor: '#335B96',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 15,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegistrationPage;
