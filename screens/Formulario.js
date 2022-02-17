import React, { useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Dimensions, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';


export default function Home( { navigation } ) { 
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [maps, setMaps] = useState([])
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  const token = "Bearer vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF";

  useEffect(() => {
    async function getData() {
      

      const headerOptions = {
          method: 'GET',
          headers: {
            'Authorization': token
          }
      }
      const response = await fetch('https://mobile.ect.ufrn.br:3003/markers', headerOptions)
      const maps = await response.json()

      setMaps(maps)
    }
    getData()
  }, [])

  const headerOptions = {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        latitude: latitude,
        longitude: longitude,
        title: titulo,
        description: descricao,
      }),
  }


  function Enviar() {
    fetch("https://mobile.ect.ufrn.br:3003/markers", headerOptions)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Erro: ' +
            response.status);
          return;
        }
        if(response.status === 200){
          alert('Ponto adicionado.')
        }
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.container1}>
        <MapView style={styles.map} onPress={(event) => {
            setLatitude(event.nativeEvent.coordinate.latitude)
            setLongitude(event.nativeEvent.coordinate.longitude)
            }}>
            <Marker 
              coordinate={{ latitude: latitude, longitude: longitude }}
              title={titulo}
              description={descricao}
            /> 
            {             
              maps.map((marker, id) => <Marker
                key={id}
                coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
                title= {marker.title}
                description= {marker.description}
              />)
            }
          </MapView>
      </ScrollView>

        <ScrollView style={styles.container2}>
          <View style={styles.formContainer}>
            <TextInput style={styles.input} placeholder=' Titulo' value={titulo} onChangeText={setTitulo} />
            <TextInput style={styles.input} placeholder=' Descrição' value={descricao} onChangeText={setDescricao} />
            <TouchableOpacity onPress={ () => Enviar() }>
               <Text style={styles.botao}>
                 ADICIONAR
               </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container1: {
    height: 400,
  },
  container2: {
    height: 200,
    backgroundColor: 'white',  
  },
  formContainer: {
    backgroundColor: 'white',
    margin: 40,
  },
  input: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,

  },
  botao: {
    backgroundColor: '#228B22',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 7,    
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
