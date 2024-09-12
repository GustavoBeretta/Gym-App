import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import gymsData from '../assets/data.json';

const GymsScreen = () => {
  const [gyms, setGyms] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setGyms(gymsData.gyms);
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      {gyms.map((gym, index) => (
        <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate('Gym Details', { gym })}>
          <Image source={{ uri: gym.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.gymName}>{gym.name}</Text>
            <Text style={styles.gymAddress}>{gym.duration}</Text>
            <Text style={styles.gymHours}>Hours: {gym.hours.monday_to_friday}</Text>
            <Text style={styles.membership}>Price: {gym.membership_price}</Text>
          </View>
        </TouchableOpacity>
      ))
      }
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    padding: 5,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFB6B6',
    borderRadius: 30,
    marginBottom: 20,

    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 30,
  },
  infoContainer: {
    marginLeft: 15,
  },
  gymName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  gymAddress: {
    fontSize: 14,
    color: '#333',
  },
  gymHours: {
    fontSize: 14,
    color: '#333',
  },
  membership: {
    fontSize: 14,
    color: '#333',
  },
  contact: {
    fontSize: 14,
    color: 'blue',
  },
  whatsapp: {
    fontSize: 14,
    color: 'green',
  }
});

export default GymsScreen;
