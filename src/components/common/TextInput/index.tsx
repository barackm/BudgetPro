import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
  const { mainContainerStyles, inputContainerStyles, iconStyles } =
    useInputStyles({
      color,
      disabled,
      error,
      isFocused,
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
          <View>
            {typeof startIcon === 'function'
              ? startIcon({
                  size: getIconSize(),
                  color: 'black',
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
          }}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={!disabled}
        />

        {endIcon && (
          <View>
            {typeof endIcon === 'function'
              ? endIcon({
                  size: getIconSize(),
                  color: 'black',
                })
              : endIcon}
          </View>
        )}
        {secureTextEntry && (
          <TouchableOpacity
            disabled={disabled}
            onPress={() => setShouldSecureTextEntry((prev: boolean) => !prev)}>
            {shouldSecureTextEntry ? (
              <Ionicons
                name="eye-off"
                size={getIconSize()}
                color={iconStyles.color}
              />
            ) : (
              <Ionicons
                name="eye"
                size={getIconSize()}
                color={iconStyles.color}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInput;
