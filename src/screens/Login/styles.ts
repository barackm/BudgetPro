import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../theme';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const isTablet =
  width > metrics.moderateScale(600) || height > metrics.moderateScale(600);

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    height: '100%',
  },
  separatorLine: {
    height: 0.6,
    backgroundColor: colors.line,
    width: '40%',
  },

  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    // paddingHorizontal: isTablet ? metrics.moderateScale(100) : 0,
  },
  form: {
    flex: 1,
    width: '100%',
  },
  separatorLineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.moderateScale(18),
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialLoginBtn: {
    paddingHorizontal: metrics.moderateScale(6),
  },
  header: {
    paddingVertical: metrics.moderateScale(40),
    alignItems: 'center',
  },
  headerText: {
    fontSize: metrics.moderateScale(24),
  },
  logo: {
    width: metrics.moderateScale(150),
    height: metrics.moderateScale(150),
  },
});

export default styles;
