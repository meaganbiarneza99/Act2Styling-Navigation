import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AccountRecoveryPage = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRestore = () => {
    console.log('Email for recovery:', email);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recover your Account</Text>
      <Text style={styles.description}>Enter your email to initiate account recovery</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={styles.restoreButton} onPress={handleRestore}>
        <Text style={styles.buttonText}>Restore</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>Go back to Login</Text>
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
    marginBottom: 16,
    color: '#335B96',
  },
  description: {
    fontSize: 16,
    color: '#335B96',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    width: '100%',
  },
  restoreButton: {
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
  loginText: {
    marginTop: 15,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AccountRecoveryPage;
