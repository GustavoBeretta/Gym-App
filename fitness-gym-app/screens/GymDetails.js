import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import openLink from '../utils';

const { width, height } = Dimensions.get('window')

const GymDetails = ({ route }) => {
    const { gym } = route.params;


    return (
        <ScrollView>
            <Image source={{ uri: gym.image }} style={styles.image} />
            <View style={styles.container}>

                <Text style={styles.gymName}>{gym.name}</Text>
                <Text style={styles.gymAddress}>{gym.address}</Text>
                <Text style={styles.phone}>{gym.contact_phone}</Text>
                <Text style={styles.gymHours}>Monday-Friday: {gym.hours.monday_to_friday}</Text>
                <Text style={styles.gymHours}>Saturday: {gym.hours.saturday}</Text>
                <Text style={styles.gymHours}>Sunday: {gym.hours.sunday}</Text>

                <Text style={styles.membership}>Avarage Price: {gym.membership_price}</Text>
                <View style={styles.icons}>
                    <Icon name='whatsapp' size={50} onPress={() => openLink(gym.whatsapp)} color="green" />
                    <Icon name='map-pin' size={50} onPress={() => openLink(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.address)}`)} />

                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: width,
        height: width / 2.5,
    },
    container: {
        padding: 20,
        flex: 'flex-row',
        alignItems: 'center',
        gap: 2,
    },
    gymName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    gymAddress: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10,
        textAlign: 'center',
    },
    phone: {
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 10,
        textAlign: 'center',
    },
    gymHours: {
        fontSize: 16,
        fontWeight: '200',
    },
    membership: {
        fontSize: 18,
        marginTop: 16
    },
    icons: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 50,
    }
});

export default GymDetails;
