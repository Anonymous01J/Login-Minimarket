import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  logoImage: { 
    width: 280,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'white', 
    textAlign: 'center', 
    marginVertical: 20, 
  },
});

export default styles;
