import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { typography } from '../../styles/typography';
import Swiper from 'react-native-swiper';
import { useRef, useState } from 'react';
import { onboarding } from '@/constants';

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.onboarding}>
            <Image
              source={item.image}
              style={styles.onboardingImage}
              resizeMode='contain'
            />
            <Text>{item.title}</Text>
          </View>
        ))}
      </Swiper>
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
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 9999,
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: '#0286FF',
    borderRadius: 9999,
  },
  onboarding: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardingImage: {
    width: '100%',
    height: 300,
  },
});
