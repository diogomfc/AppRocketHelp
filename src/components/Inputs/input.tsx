import { Input as NativeBaseInput, IInputProps } from 'native-base';


export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      placeholderTextColor="gray.300"
      bg="gray.700"
      h={14}
      size="md"
      fontFamily="boby"
      color="white"
      borderRadius={8}
      {...rest}
    />
  );
}