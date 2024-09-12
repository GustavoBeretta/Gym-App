import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}> 
      <Image style={styles.icon}
        source={require("../assets/favicon.png")}
      />
      <View>
        <Text style={styles.title}>
          FITNESS GYM
        </Text>
        <Text style={styles.subtitle}>
          TRAINING
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF3131',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 70,
    height: 70,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
  },
});

export default Header;