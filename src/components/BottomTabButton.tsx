import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet, View } from 'react-native';
import { colors, metrics } from '../theme';
import { shadow } from '../theme/utlis';

interface BottomTabButtonProps {
  size: number;
  color: string;
}

const BottomTabButton: React.FC<BottomTabButtonProps> = props => {
  const { size } = props;
  return (
    <View
      style={{
        width: metrics.moderateScale(45),
        height: metrics.moderateScale(45),
        borderRadius: metrics.moderateScale(45 / 2),
        ...shadow,
        ...styles.container,
      }}>
      <AntDesign name="plus" color={colors.white} size={size} />
    </View>
  );
};

export default BottomTabButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
