import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true)
  const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=83139"

function loadBusStopData() {
  fetch(BUSSTOP_URL)
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    console.log(responseData);
  });
  

  useEffect(() => {
    loadBusStopData();
  }, []);
}
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus arrival time: </Text>
      <Text style={styles.arrivalTime}>
        {loading ? <ActivityIndicator color="blue" size="large" /> : "loaded"}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh!</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "green",
    padding: 10,
    margin: 10, 
  },
});
