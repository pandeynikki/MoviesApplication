import {connect} from 'react-redux';
import {MoviesComponent} from '../components';

const mapStateToProps = state => ({
  moviesData: state?.movies,
});

const mapDispatchToProps = dispatch => {
  return {};
};

export const MoviesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesComponent);
