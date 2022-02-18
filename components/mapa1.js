import React, { useEffect, useState } from 'react';
import {  StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default function Mapa( { navigation } ) { 
  const [maps, setMaps] = useState([])
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    async function getData() {
      const token = "vv7oTsHdw0X9g5e7QbniP58j3iJY4h6AoOSxMIw2X8xjokSHjF";

      const headerOptions = {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
        }
      }
      const response = await fetch('https://mobile.ect.ufrn.br:3003/markers', headerOptions)
      const maps = await response.json()

      setMaps(maps)
    }
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <MapView style={styles.map} onPress={(event) => {
        setLatitude(event.nativeEvent.coordinate.latitude)
        setLongitude(event.nativeEvent.coordinate.longitude)
      }}>
        {          
          maps.map((marker, id) => <Marker
            key={id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title= {marker.title}
            description= {marker.description}
          />)
        }
      </MapView>
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
});
