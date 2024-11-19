import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styleButton';

const Buttons = ({ onPress, isDisabled, title }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isDisabled && styles.disabledButton]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;
