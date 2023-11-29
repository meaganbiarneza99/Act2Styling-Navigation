import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back to CuisineClick!</Text>
      <Text style={styles.description}>Login to your Account:</Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('AccountRecovery')}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
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
    fontSize: 25,
    marginBottom: 25,
    color: '#335B96',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: '100%',
  },
  signupText: {
    marginTop: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  forgotPasswordText: {
    marginTop: 1,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 1,
    paddingLeft: 195,
    width: '80%',
    alignItems: 'flex-end',
    fontSize: 11,
  },
  description: {
    marginTop: 8,
    color: '#335B96',
    marginBottom: 8,
    marginRight: 200,
    fontSize: 13,
  },
  loginButton: {
    backgroundColor: '#335B96',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 1,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;
