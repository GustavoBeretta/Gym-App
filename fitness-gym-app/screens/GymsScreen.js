import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity
          key={index}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('GymDetails', { gym })}
        >
          <Image source={{ uri: gym.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.gymName}>{gym.name}</Text>
            <Text style={styles.gymAddress}>{gym.address}</Text>
            <Text style={styles.membership}>{gym.membership_price}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#f0f0f5',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
  },
  gymName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3142',
  },
  gymAddress: {
    fontSize: 16,
    color: '#4f5d75',
    flexShrink: 1,
    marginTop: 5,
  },
  membership: {
    fontSize: 16,
    color: '#28A745',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default GymsScreen;
