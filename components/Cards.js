import React from 'react';
import { Card } from 'react-native-paper';
import { View } from 'react-native';
import styles from '../styles/styleCard';

const Cards = ({ children }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.content}>
        {children}
      </View>
    </Card>
  );
};

export default Cards;
