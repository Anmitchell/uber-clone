import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { typography } from '../../styles/typography';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.touchOp}
        onPress={() => {
          router.replace('/(auth)/sign-up');
        }}
      >
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full height of the screen
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  touchOp: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontFamily: typography.JakartaBold,
  },
});
