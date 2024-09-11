import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}> 
      <Text style={styles.title}>
        Fitness Gym
      </Text>
      <Text style={styles.subtitle}>
        Training
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#FF3131',
    padding: 15,
    color: 'black',
  },
  title: {
    fontSize: 24, // Texto maior
    fontWeight: 'bold', // Texto em negrito
    
  },
  subtitle: {
    fontSize: 18, // Texto menor que o título

  }
});

export default Header;