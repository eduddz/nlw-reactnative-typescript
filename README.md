ReactNative + Expo + Typescript

    expo init react-native 
    |
    blank (Typescritpt)

Para executar 

    expo start

Limpar cache

    expo start -c

Para instalar font

    expo install expo-font @expo-google-fonts/roboto

Se a fonte ainda não tiver sido carregada, ele vai segurar a tela
    
    expo install expo-app-loading

ReactNative não consegue lidar por padrão com svg, para isso..

    expo install react-native-svg
    |
    yarn add --dev react-native-svg-transformer

Criar um arquivo metro.config.js

    const { getDefaultConfig } = require("expo/metro-config");

    module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts }
    } = await getDefaultConfig(__dirname);
    return {
        transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer")
        },
        resolver: {
        assetExts: assetExts.filter(ext => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
        }
    };
    })();


Espaçamento entre a camera e o contéudo 

    yarn add react-native-iphone-x-helper

Linear-gradient

    expo install expo-linear-gradient

Animações de forma declarativa

    yarn add moti
    |
    expo install react-native-reanimated

Para lidar com redirecionamento... abrir uma tela para fazer conexão com o github

    expo install expo-auth-session expo-random

Axios

    yarn add axios

Para extrutura de chave e valor

    expo install @react-native-async-storage/async-storage

RealTime

    yarn add socket.io-client

