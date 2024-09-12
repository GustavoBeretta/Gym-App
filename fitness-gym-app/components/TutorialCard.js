import * as React from 'react';
import { View, ImageBackground, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';

const openLink = (url) => {
  Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
};

const TutorialCard = ({ imageUrl, lesson_name, instructor_name, duration, url }) => {
  return (
    <TouchableOpacity onPress={() => openLink(url)}>
        <Card style={styles.card}>
            <ImageBackground
                source={{ uri: imageUrl }}
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>{lesson_name}</Text>
                    <Text style={styles.subtitle}>{instructor_name} - {duration}</Text>
                </View>
            </ImageBackground>
        </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
      },
      backgroundImage: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
      },
      overlay: {
        backgroundColor: 'rgba(255, 140, 140, 0.82)',
        padding: 10,
      },
      title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      subtitle: {
        color: 'white',
        fontSize: 14,
      },
});

export default TutorialCard;
