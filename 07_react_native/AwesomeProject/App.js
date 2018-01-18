import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 300, height: 200}}
          source={{
            uri:'https://wallup.net/wp-content/uploads/2014/11/so-happy-smiles.jpg'}}
          />
        <Text>go</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
