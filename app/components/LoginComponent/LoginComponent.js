import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Text, Image} from 'react-native';
import {style} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  updateEmail,
  updatePassword,
} from '../../store/actions/authenticationAction';

export const LoginComponent = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (validateEmail(email) && validatePassword(password)) {
      dispatch(updateEmail(email));
      dispatch(updatePassword(password));
      navigation.navigate('Movies');
    }
  };

  const validateEmail = email => {
    const regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    return regex.test(email);
  };

  const validatePassword = password => {
    const regex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    return regex.test(password);
  };

  return (
    <View style={style.container}>
      <Image
        style={style.img}
        source={{
          uri: 'https://i.pinimg.com/736x/ea/8d/11/ea8d11f1ffc6355b8a440106ce61d0f3.jpg',
        }}
      />
      <View style={style.inputView}>
        <TextInput
          style={style.TextInputs}
          placeholder="Email"
          placeholderTextColor="#000"
          value={email}
          returnKeyType="next"
          onChangeText={setEmail}
        />
      </View>
      <View style={style.inputView}>
        <TextInput
          style={style.TextInputs}
          placeholder="Password"
          placeholderTextColor="#000"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={
          !validateEmail(email) || !validatePassword(password)
            ? style.loginBtnDisabled
            : style.loginBtn
        }
        disabled={!validateEmail(email) || !validatePassword(password)}
        onPress={handleSubmit}>
        <Text style={style.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};
