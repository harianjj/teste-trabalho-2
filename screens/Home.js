import React  from 'react';
import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';

import Mapa from '../components/mapa1';

export default function Home( { navigation } ) { 
  const plusFormulario = () => {
     navigation.navigate('Formulario') 
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Mapa/>
      <TouchableOpacity
          onPress={ plusFormulario }
          style={styles.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_green.png',
            }}
            style={styles.floatingButtonStyle}
          />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
});