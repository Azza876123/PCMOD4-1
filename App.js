import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <View style={styles.container}>
      <Text>Bus arrival time: </Text>
      <Text>{loading ? 'loading' : 'loaded'}</Text>
      <TouchableOpacity style={styles.button}>
        <Text>Refresh</Text>
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
  }
});
