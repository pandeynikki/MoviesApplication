import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovies} from '../../store/actions/moviesAction';
import {styles} from './styles';

export const MoviesComponent = props => {
  const {moviesData} = props;
  const [moviesList, setMovies] = useState();
  const movies = useSelector(state => state.movieReducer.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    setMovies(movies);
  }, [movies]);

  const renderItem = ({item}) => (
    <View style={styles.movieContainer}>
      <Image
        style={styles.moviePoster}
        source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
      />
      <Text style={styles.movieTitle}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};
