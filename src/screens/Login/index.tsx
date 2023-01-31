import React from 'react';
import * as Yup from 'yup';
import { Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Form from '../../components/form/Form';
import FormikTextInput from '../../components/form/FormikTextInput';
import SubmitBtn from '../../components/form/SubmitBtn';
import Button from '../../components/common/Button';
import styles from './styles';
import { IconProps } from '../../types/button';
import Screen from '../../components/Screen/Screen';

const LoginScreen: React.FC = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior="position"
        // keyboardVerticalOffset={metrics.moderateScale(50)}
        style={styles.keyboardAvoidingView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <View style={styles.container}>
            <Form
              initialValues={{ email: '', password: '' }}
              onSubmit={values => console.log(values)}
              validationSchema={validationSchema}
              style={styles.form}>
              <View style={styles.header}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={styles.logo}
                />
              </View>
              <View>
                <FormikTextInput
                  name="email"
                  placeholder="Enter Email"
                  label="Email"
                  capitalize="none"
                  autoCorrect={false}
                  startIcon={({ color, size }: IconProps) => (
                    <AntDesign name="user" color={color} size={size} />
                  )}
                />
                <FormikTextInput
                  name="password"
                  placeholder="Enter Password"
                  label="Password"
                  startIcon={({ color, size }: IconProps) => (
                    <AntDesign name="lock" color={color} size={size} />
                  )}
                  secureTextEntry
                />
                <SubmitBtn>LOGIN</SubmitBtn>
                <Button
                  onPress={() => console.log('Forgot Password')}
                  variant="text">
                  Forgot Password?
                </Button>
              </View>
              <View style={styles.separatorLineContainer}>
                <View style={styles.separatorLine} />
              </View>
              <View style={styles.socialLoginContainer}>
                <View style={styles.socialLoginBtn}>
                  <Button
                    variant="outlined"
                    onPress={() => console.log('Forgot Password')}
                    renderIconBtn={({ color, size }) => (
                      <FontAwesome name="facebook" color={color} size={size} />
                    )}
                  />
                </View>
                <View style={styles.socialLoginBtn}>
                  <Button
                    variant="outlined"
                    onPress={() => console.log('Forgot Password')}
                    renderIconBtn={({ color, size }) => (
                      <FontAwesome name="google" color={color} size={size} />
                    )}
                  />
                </View>
                <View style={styles.socialLoginBtn}>
                  <Button
                    variant="outlined"
                    onPress={() => console.log('Forgot Password')}
                    renderIconBtn={({ color, size }) => (
                      <FontAwesome name="twitter" color={color} size={size} />
                    )}
                  />
                </View>
              </View>
            </Form>
            <Button
              onPress={() => console.log('Forgot Password')}
              variant="text">
              Don't have an account? Sign Up
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default LoginScreen;
