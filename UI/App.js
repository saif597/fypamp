import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Appnavigation from './navigation/appnavigation';
import { Provider } from 'react-redux';
import { store } from './store'; 
import { StyleSheet, Text, View } from 'react-native';

// import Amplify from 'aws-amplify';
// import awsconfig from '../src/aws-exports';
// import {withAuthenticator,AmplifySignOut} from 'aws-amplify-react-native';

// Amplify.configure(awsconfig);

 export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Appnavigation />
    </NavigationContainer>
    </Provider>
    // <View style={styles.container}>
    //   <AmplifySignOut/>
    //   <Text style={styles.text}>FYP</Text>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color:'black',
//   },
// });

// export default  withAuthenticator(App);