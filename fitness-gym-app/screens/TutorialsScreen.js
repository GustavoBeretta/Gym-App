import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import tutorialsData from '../data.json'; 




const TutorialsScreen = () => {
const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    setTutorials(tutorialsData.tutorials); 
  }, []);

    return (
    <ScrollView style={styles.scrollView}>
      {tutorials.map((tutorial, index) => (
        <View key={index} style={styles.card} >
          <View style={styles.infoContainer}>
            <Text style={styles.tutorialName}>{tutorial.lesson_name}</Text>
            <Text style={styles.duration}>{tutorial.duration}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFB6B6',
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  infoContainer: {
    marginLeft: 15,
  },
  tutorialName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  duration: {
    textAlign:'center',
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

export default TutorialsScreen