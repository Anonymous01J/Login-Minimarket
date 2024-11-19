import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styleInputText';

const InputText = ({
  label,
  value,
  placeholder,
  onChangeText,
  pswrd,
  isValid,
  mayus,
  showPassword,
  togglePassword,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <View style={[styles.inputContainer, isValid ? styles.valid : styles.invalid]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={pswrd && !showPassword}
        placeholderTextColor="#888"
        autoCapitalize={mayus}
      />
      {pswrd && (
        <TouchableOpacity onPress={togglePassword} style={styles.iconContainer}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default InputText;
