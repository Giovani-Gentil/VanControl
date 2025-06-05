import { Accuracy, LocationObject, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location'

import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'


export default function App() {
  const [location, setLocation] = useState<LocationObject | null>(null)
  const [mapType, setMapType] = useState<'standard' | 'hybrid'>('standard')
  const [permissionDenied, setPermissionDenied] = useState(false)

  async function startLocationTracking() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      setPermissionDenied(false) // limpa erro anterior, se houver
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10
        },
        (newLocation) => {
          setLocation(newLocation)
        }
      )

      return () => subscriber.remove()
    } else {
      setPermissionDenied(true)
      console.log('Permissão de localização não concedida')
    }
  }

  useEffect(() => {
    const unsubscribe = startLocationTracking()
    return () => {
      if (typeof unsubscribe === 'function') unsubscribe()
    }
  }, [])

  // ⚠ Se a permissão for negada
  if (permissionDenied) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', margin: 16 }}>
          Permissão de localização foi negada. Por favor, ative nas configurações do sistema.
        </Text>
        <TouchableOpacity onPress={startLocationTracking} style={styles.tryAgainButton}>
          <Text style={{ color: 'white' }}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    )
  }

  // Carregando
  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Carregando localização...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType={mapType}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          }}
          title="Você está aqui"
        />
      </MapView>

      <View style={styles.buttonContainer}>
        {['standard', 'hybrid'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.button,
              mapType === type && styles.buttonSelected
            ]}
            onPress={() => setMapType(type as any)}
          >
            <Text style={styles.buttonText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
    
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingVertical: 8,
    paddingHorizontal: 4
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#ddd'
  },
  buttonSelected: {
    backgroundColor: '#007bff'
  },
  buttonText: {
    color: '#000'
  },
  tryAgainButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 8
  }
})