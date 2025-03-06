import {
  KeyboardAvoidingView,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  TextInput,
  Platform,
  Keyboard,
} from 'react-native';
import { InputFieldProps } from '@/types/type';

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  style,
  ...props
}: InputFieldProps) => (
  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <Text style={[labelStyle]}>{label}</Text>
        <View>
          {icon && <Image source={icon} />}
          <TextInput secureTextEntry={secureTextEntry} {...props} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;
