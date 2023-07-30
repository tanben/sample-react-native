import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  imageContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50%',
  },
  bgImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  tinyImage: {
    width: 50,
    height: 50,
    padding: 10,
    alignSelf: 'center',
    bottom: -100,
  },
  hideImage: {
    display: 'none',
  },

  badge: {
    bottom: -250,
    left: 125,

    backgroundColor: 'red',
    height: 60,
    width: 60,
    borderRadius: 60,
  },

  badgeText: {
    left: 18,
    bottom: 14,
    color: 'white',
    fontSize: 35,
    lineHeight: 84,
    fontWeight: 'bold',
  },
});

export {styles};
