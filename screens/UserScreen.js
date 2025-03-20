import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const UserScreen = ({ navigation }) => {
  const [userIndex, setUserIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const totalUsers = 80;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`https://random-data-api.com/api/users/random_user?size=${totalUsers}`);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleNext = () => {
    if (userIndex < totalUsers - 1) {
      setUserIndex(userIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (userIndex > 0) {
      setUserIndex(userIndex - 1);
    }
  };

  if (!users.length) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  const user = users[userIndex];

  return (
    <ImageBackground source={require('../assets/sd.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.label}>ID: {user.id}</Text>
        <Text style={styles.label}>UID: {user.uid}</Text>
        <Text style={styles.label}>Password: {user.password}</Text>
        <Text style={styles.label}>First Name: {user.first_name}</Text>
        <Text style={styles.label}>Last Name: {user.last_name}</Text>
        <Text style={styles.label}>Username: {user.username}</Text>
        <Text style={styles.label}>Email: {user.email}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, userIndex === 0 && styles.disabled]} onPress={handlePrevious} disabled={userIndex === 0}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, userIndex === totalUsers - 1 && styles.disabled]} onPress={handleNext} disabled={userIndex === totalUsers - 1}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adds transparency for better readability
    borderRadius: 20,
    paddingVertical: 30,
    width: '90%',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'gold',
  },
  label: {
    fontSize: 18,
    color: 'white',
    marginVertical: 5,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'gold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: 'gray',
  },
  loading: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default UserScreen;
