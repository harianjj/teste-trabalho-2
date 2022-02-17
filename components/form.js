import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function Botao( { navigation } ) { 

    const modalizeRef = useRef(null)

    const clickHandler = () => {
       navigation.navigate('Formulario') 
    };
  
    function onOpen(){
      modalizeRef.current?.open()
    }
  return (
    <View style={styles.container}>
      <Modalize 
        ref={modalizeRef}
        snapPoint={300}
      >
        <View style={styles.modalBody}>
            <TouchableOpacity>
               <Text style={[styles.botao, {backgroundColor: '#29ae19'}]}>
                 EDITAR
               </Text>
            </TouchableOpacity>
        </View>
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
      floatingButtonStyle: {
        resizeMode: 'contain',
        width: 70,
        height: 70,
      },
      modalBody: {
        flex: 1,
        height: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      botao: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 7
    
      }
});
