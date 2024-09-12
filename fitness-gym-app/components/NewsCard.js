import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Card } from 'react-native-elements';

const openLink = (url) => {
  Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
};

const NewsCard = ({ imageUrl, title, url }) => {
  return (
    <TouchableOpacity onPress={() => openLink(url)}>
      <Card containerStyle={styles.card}>
        <ImageBackground source={{ uri: imageUrl }} style={styles.image} imageStyle={styles.imageStyle}>
          <View style={styles.overlay}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </ImageBackground>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajuste a opacidade conforme necessário
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NewsCard;
