import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import {Link} from 'expo-router'

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className='text-3xl font-pblack'>Vidora!</Text>
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
      <Link to="/home">Home</Link>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff', 
//   },
//   container: {
//     flex: 1,
//     padding: 16, 
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
 