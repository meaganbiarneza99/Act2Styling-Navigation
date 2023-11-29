import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CuisineClick</Text>
      <Text style={styles.description}> Select your cravings and savor the difference!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color="#335B96" />
      </View>
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
    marginBottom: 30,
    color: '#335B96', 
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    color: '#335B96',
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomePage;
