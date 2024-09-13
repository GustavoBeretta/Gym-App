import { Linking } from 'react-native';

const openLink = (url) => {
    Linking.canOpenURL(url)
        .then((supported) => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.error('URL não suportada:', url);
            }
        })
        .catch((err) => console.error('Erro ao abrir o link:', err));
};

export default openLink;