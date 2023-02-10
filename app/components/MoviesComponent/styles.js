import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  movieContainer: {
    alignItems: 'center',
    margin: 10,
    flex: 1,
  },
  movieTitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 10,
  },
  moviePoster: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
  },
});
