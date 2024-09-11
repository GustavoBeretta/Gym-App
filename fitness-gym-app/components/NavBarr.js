import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('News')}
      >
        <Text style={styles.navText}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('Gyms')}
      >
        <Text style={styles.navText}>Gyms</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.navItem}
        onPress={() => navigation.navigate('Tutorials')}
      >
        <Text style={styles.navText}>Tutorials</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',  
    bottom: 0,             
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FF3131',
    padding: 15,
  },
  navItem: {
    padding: 10,
  },
  navText: {
    color: 'black',
    fontSize: 16,
  },
});

export default Navbar;
