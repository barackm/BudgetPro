import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {metrics} from '../../theme';

interface Props {
  children: React.ReactNode;
  header?: string;
}

export function Screen({children}: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? 'black' : 'white'}
        />
        {children}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: metrics.horizontalScale(10),
    paddingVertical: metrics.moderateScale(10),
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  lightHeaderBar: {
    backgroundColor: 'white',
  },
  darkHeaderBar: {
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lightHeaderText: {
    color: 'black',
  },
  darkHeaderText: {
    color: 'white',
  },
});
