import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonProps } from '@/types/type';

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return styles.bgSecondary;
    case 'danger':
      return styles.bgDanger;
    case 'success':
      return styles.bgSuccess;
    case 'outline':
      return styles.bgOutline;
    default:
      return styles.bgDefault;
  }
};

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return styles.textPrimary;
    case 'secondary':
      return styles.textSecondary;
    case 'danger':
      return styles.textDanger;
    case 'success':
      return styles.textSuccess;
    default:
      return styles.textDefault;
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  style,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, getBgVariantStyle(bgVariant), style]}
    >
      {IconLeft && <IconLeft />}
      <Text style={[styles.text, getTextVariantStyle(textVariant)]}>
        {title}
      </Text>
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
    padding: 12,
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
    fontSize: 18,
  },
  textPrimary: {
    color: 'black',
  },
  textSecondary: {
    color: '#f3f4f6',
  },
  textDanger: {
    color: '#fee2e2',
  },
  textSuccess: {
    color: '#dcfce7',
  },
  textDefault: {
    color: 'white',
  },
  bgSecondary: {
    backgroundColor: '#6b7280',
  },
  bgDanger: {
    backgroundColor: '#ef4444',
  },
  bgSuccess: {
    backgroundColor: '#22c55e',
  },
  bgOutline: {
    backgroundColor: 'transparent',
    borderColor: '#d4d4d4',
    borderWidth: 0.5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgDefault: {
    backgroundColor: '#0286FF',
  },
});
