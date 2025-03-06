import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import { images } from '@/constants';
import InputField from '@/components/InputField';
import { icons } from '@/constants';
import CustomButton from '@/components/CustomButton';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onSignUpPress = () => {};

  return (
    <ScrollView>
      <View>
        <View>
          <Image source={images.signUpCar} />
          <Text>Create your account</Text>
        </View>

        <View>
          <InputField
            label='Name'
            placeholder='Enter your name'
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label='Email'
            placeholder='Enter your email'
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label='password'
            placeholder='Enter your password'
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton title='Sign Up' onPress={onSignUpPress} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  // },
  // headerContainer: {
  //   position: 'relative',
  //   width: '100%',
  //   height: 10,
  // },
  // signUpImage: {
  //   width: '100%',
  // },
});
