import React, { useEffect } from 'react';
import { Path, Svg } from 'react-native-svg';
import Animated, {
  withTiming,
  useAnimatedProps,
  useSharedValue,
  interpolateColor,
} from 'react-native-reanimated';

import { colors } from '../../theme';
import { ISvgProps } from '../../types/svg';

const UserIcon: React.FC<ISvgProps> = props => {
  const { size = 24, color = colors.grayMain, focused = false } = props;
  const fillProgress = useSharedValue(focused ? 1 : 0);

  const AnimatedSvg = Animated.createAnimatedComponent(Svg);

  useEffect(() => {
    fillProgress.value = withTiming(focused ? 1 : 0);
  }, [focused, fillProgress]);

  const svgAnimatedProps = useAnimatedProps(() => {
    const fillValue = interpolateColor(
      fillProgress.value,
      [0, 1],
      [colors.secondary, color],
    );
    console.log(fillValue, 'fillValue');
    return {
      fill: 'none',
    };
  });

  return (
    <AnimatedSvg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={focused ? color : 'none'}
      //   animatedProps={svgAnimatedProps}
    >
      <Path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke={focused ? color : colors.grayMain}
        strokeWidth="1.5"
        fill={focused ? color : 'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22"
        stroke={focused ? color : colors.grayMain}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </AnimatedSvg>
  );
};

export default UserIcon;
