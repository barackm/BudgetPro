import React, { useEffect } from 'react';
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';

import { TouchableWithoutFeedback } from 'react-native';
import { ISwitch } from '../../../types/switch';
import useTheme from '../../../hooks/useTheme';
import { colors, metrics } from '../../../theme';

const Switch: React.FC<ISwitch> = props => {
  const { value, color = 'primary', disabled, onValueChange } = props;
  const theme = useTheme();
  const { palette = {}, components } = theme;
  const { Switch: SwitchStyles } = components || {};

  const switchTranslate = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return withTiming(value ? 22 : 0);
  });

  useEffect(() => {
    if (value) {
      switchTranslate.value = metrics.moderateScale(18);
    } else {
      switchTranslate.value = metrics.moderateScale(2);
    }
  }, [switchTranslate, value]);

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(switchTranslate.value, {
            mass: 1,
            damping: 15,
            stiffness: 120,
            overshootClamping: false,
            restSpeedThreshold: 0.001,
            restDisplacementThreshold: 0.001,
          }),
        },
      ],
    };
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 22],
      [
        colors.light,
        palette[color as keyof typeof palette]?.main || colors.primary,
      ],
    );
    return {
      backgroundColor,
    };
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (!disabled) {
          onValueChange && onValueChange(!value);
        }
      }}>
      <Animated.View style={[SwitchStyles?.root, backgroundColorStyle]}>
        <Animated.View style={[SwitchStyles?.circle, customSpringStyles]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
