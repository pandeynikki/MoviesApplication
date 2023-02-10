import {connect} from 'react-redux';
import {LoginComponent} from '../components';

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
