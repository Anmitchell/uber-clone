import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonProps } from '@/types/type';

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-gray-500';
    case 'danger':
      return 'bg-red-500';
    case 'success':
      return 'bg-green-500';
    case 'outline':
      return 'bg-transparent border-neutral-300 border-[0.5px]';
    default:
      return 'bg-[#0286FF]';
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, getBgVariantStyle(bgVariant)]}
    >
      {IconLeft && <IconLeft />}
      <Text style={styles.text}>{title}</Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 10, // mt-10
    width: '100%', // w-full
    borderRadius: 50, // rounded-full
    flexDirection: 'row', // flex-row
    justifyContent: 'center', // justify-center
    alignItems: 'center', // items-center
    shadowColor: '#9e9e9e', // shadow-neutral-400 (neutral gray)
    shadowOffset: { width: 0, height: 2 }, // shadow offset for depth
    shadowOpacity: 0.7, // shadow-opacity equivalent (70%)
    shadowRadius: 3, // shadow-md for a medium shadow
    elevation: 5,
  },
  text: {
    color: 'black',
  },
});
