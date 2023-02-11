import React, { useEffect } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../types/svg';
import { View } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatePath = Animated.createAnimatedComponent(Path);

const UserIcon: React.FC<ISvgProps> = props => {
  const { size = 24, color, focused = false, colors } = props;
  const _focused = useSharedValue(0);

  useEffect(() => {
    _focused.value = withTiming(focused ? 1 : 0, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused]);

  const hex2Rgba = (hex: string, alpha: number = 1): string => {
    'worklet';
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const WHITE_COLOR = colors.white[50];
  const GREY_COLOR = colors.grey[700];
  const PRIMARY_COLOR = color || colors.primary[300];
  const SECONDARY_COLOR = colors.secondary.main;

  const animatedPropsPath1 = useAnimatedProps(() => {
    const fillColor = interpolateColor(
      _focused.value,
      [0, 1],
      [WHITE_COLOR, SECONDARY_COLOR],
    );
    const strokeColor = interpolateColor(
      _focused.value,
      [0, 1],
      [GREY_COLOR, SECONDARY_COLOR],
    );

    return {
      fill: hex2Rgba(fillColor.toString(), 1),
      stroke: hex2Rgba(strokeColor.toString(), 1),
    };
  });

  const animatedPropsPath2 = useAnimatedProps(() => {
    const fillColor = interpolateColor(
      _focused.value,
      [0, 1],
      [WHITE_COLOR, PRIMARY_COLOR],
    );

    const strokeColor = interpolateColor(
      _focused.value,
      [0, 1],
      [GREY_COLOR, PRIMARY_COLOR],
    );

    return {
      fill: hex2Rgba(fillColor.toString(), 1),
      stroke: hex2Rgba(strokeColor.toString(), 1),
    };
  });

  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <AnimatePath
          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          // fill={focused ? colors.secondary.main : 'none'}
          // stroke={focused ? colors.secondary.main : colors.grey[700]}
          animatedProps={animatedPropsPath1}
        />
        <AnimatePath
          d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          // fill={focused ? color : 'none'}
          // stroke={focused ? color : colors.grey[700]}
          animatedProps={animatedPropsPath2}
        />
      </Svg>
    </View>
  );
};

export default UserIcon;
