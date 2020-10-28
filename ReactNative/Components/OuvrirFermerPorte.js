import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OuvrirFermerPorte = ({navigation}) => {
    return (
      <View style={styles.container}>
          Ouverture x Fermeture
      </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
    justifyContent: 'center'
    }
})

export default OuvrirFermerPorte;