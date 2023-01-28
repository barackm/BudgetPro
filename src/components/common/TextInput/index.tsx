import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Text,
  View,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import { ITextInput } from '../../../types/textInput';
import { getIconSize } from '../../../utlis/icons';
import useInputStyles from '../../../hooks/useInputStyles';
import useTheme from '../../../hooks/useTheme';
import styles from './styles';

const TextInput: React.FC<ITextInput> = props => {
  const {
    label,
    startIcon,
    endIcon,
    placeholder,
    color = 'primary',
    disabled,
    error = null,
    keyboardType,
    multiline,
    numberOfLines,
    onBlur,
    onChangeText,
    onFocus,
    secureTextEntry,
    style = {},
    value,
  } = props;
  const [shouldSecureTextEntry, setShouldSecureTextEntry] =
    useState<boolean>(false);
  const theme = useTheme();
  const { components } = theme;
  const { TextInput: TextInputStyles } = components;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const {
    mainContainerStyles,
    inputContainerStyles,
    iconStyles,
    errorMessageStyles,
    inputStyles,
  } = useInputStyles({
    color,
    disabled,
    error,
    isFocused,
    multiline,
    numberOfLines,
  });

  useEffect(() => {
    setShouldSecureTextEntry(secureTextEntry || false);
  }, [secureTextEntry]);

  return (
    <View
      style={{
        ...TextInputStyles.root,
        ...mainContainerStyles,
        ...style,
      }}>
      {label && (
        <Text
          style={{
            ...TextInputStyles.label,
          }}>
          {label}
        </Text>
      )}
      <View
        style={{
          ...TextInputStyles.inputContainer,
          ...inputContainerStyles,
        }}>
        {startIcon && (
          <View
            style={{
              ...styles.iconContainer,
              ...styles.startIcon,
            }}>
            {typeof startIcon === 'function'
              ? startIcon({
                  size: iconStyles.size,
                  color: iconStyles.color || 'black',
                })
              : startIcon}
          </View>
        )}

        <RNTextInput
          onChangeText={onChangeText}
          onBlur={() => {
            setIsFocused(false);
            onBlur && onBlur();
          }}
          onFocus={() => {
            setIsFocused(true);
            onFocus && onFocus();
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={shouldSecureTextEntry}
          value={value}
          style={{
            ...TextInputStyles.input,
            ...inputStyles,
          }}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={!disabled}
        />

        {(endIcon || error) && (
          <View style={styles.iconContainer}>
            {error ? (
              <MaterialIcons
                name="error-outline"
                size={iconStyles.size}
                color={errorMessageStyles.color}
              />
            ) : typeof endIcon === 'function' ? (
              endIcon({
                size: getIconSize(),
                color: 'black',
              })
            ) : (
              endIcon
            )}
          </View>
        )}
        {secureTextEntry && (
          <TouchableOpacity
            disabled={disabled}
            onPress={() => setShouldSecureTextEntry((prev: boolean) => !prev)}>
            {shouldSecureTextEntry ? (
              <Ionicons
                name="ios-eye-off-outline"
                size={iconStyles.size}
                color={iconStyles.color}
              />
            ) : (
              <Ionicons
                name="ios-eye-outline"
                size={iconStyles.size}
                color={iconStyles.color}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text
          style={{
            ...errorMessageStyles,
          }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default TextInput;
