import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function App() {
  
  const [loading, setLoading] = useState("True");
  const [arrival, setArrival] = useState("");
  const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=83139"

function loadBusStopData() {
  
  setLoading(true);

  fetch(BUSSTOP_URL)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log("Original Data:");
      console.log(responseData);
      const myBus = responseData.services.filter(
        (item) => item.no === "155"
      )[0];
      console.log("My bus:");
      console.log(myBus.next.time);
      setArrival(myBus.next.time);
      setLoading(false);
    });
  
}
  
useEffect(() => {
  const interval = setInterval(loadBusStopData, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus arrival time: </Text>
      <Text style={styles.arrivalTime}>
        {loading ? <ActivityIndicator color="blue" size="large" /> : arrival }</Text>
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
