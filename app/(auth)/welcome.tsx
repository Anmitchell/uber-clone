import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { typography } from '../../styles/typography';
import Swiper from 'react-native-swiper';
import { useRef, useState } from 'react';
import { onboarding } from '@/constants';
import CustomButton from '@/components/CustomButton';

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
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={styles.swiperDot} />}
        activeDot={<View style={styles.swiperActiveDot} />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} style={styles.onboarding}>
            <Image
              source={item.image}
              style={styles.onboardingImage}
              resizeMode='contain'
            />
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
            </View>
            <Text style={styles.titleDescription}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <CustomButton title='Next' />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%', // Take up the full height of the screen
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
  skipText: {
    color: 'black',
    fontSize: 16,
    fontFamily: typography.JakartaBold,
  },
  swiperDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 9999,
  },
  swiperActiveDot: {
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
    padding: 5,
  },
  onboardingImage: {
    width: '100%',
    height: 300,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 40,
    textAlign: 'center',
  },
  titleDescription: {
    fontSize: 16,
    fontFamily: typography.JakartaSemiBold,
    textAlign: 'center',
    color: '#858585',
    marginHorizontal: 40,
    marginTop: 12,
  },
  customButton: {
    marginTop: 10,
    color: 'red',
  },
});
