import React from 'react';
import { SafeAreaView, ImageBackground, Image, Text, View, StatusBar } from 'react-native';
import Cards from './components/Cards';
import InputText from './components/InputText';
import Buttons from './components/Button';
import useLogin from './hooks/useLogin';
import styles from './styles/styleApp';

export default function App() {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    emailValid,
    passwordValid,
    showPassword,
    togglePassword,
  } = useLogin();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={require('./assets/fondo2.jpg')} style={styles.backgroundImage}>
        <View style={styles.view}>
          <Cards>
            <Image source={require('./assets/LogoMinimarket.png')} style={styles.logoImage} />
            <Text style={styles.title}>Iniciar Sesión</Text>
            <InputText
              label="Correo"
              placeholder="Correo"
              mayus="none"
              value={email}
              onChangeText={handleEmailChange}
              isValid={emailValid}
            />
            <InputText
              label="Contraseña"
              placeholder="Contraseña"
              pswrd
              value={password}
              onChangeText={handlePasswordChange}
              isValid={passwordValid}
              showPassword={showPassword}
              togglePassword={togglePassword}
            />
            <Buttons
              title="Entrar"
              onPress={handleLogin}
              isDisabled={!emailValid || !passwordValid}
            />
          </Cards>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}