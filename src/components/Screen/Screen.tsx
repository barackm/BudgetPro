import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

interface Props {
  children: React.ReactNode;
  header?: string;
}

export function Screen({children}: Props) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? 'black' : 'white'}
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
