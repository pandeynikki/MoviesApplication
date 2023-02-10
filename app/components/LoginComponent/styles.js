import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: '#fff',
    borderRadius: 30,
    width: '70%',
    height: 45,
    paddingLeft: 12,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  TextInputs: {
    height: 50,
    padding: 10,
  },
  img: {
    position: 'absolute',
    top: 100,
    height: 150,
    width: 150,
  },
  loginBtn: {
    width: '50%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#E50914',
  },
  loginBtnDisabled: {
    width: '50%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#ff9999',
  },
  loginText: {
    fontWeight: '600',
    color: '#fff',
  },
});
