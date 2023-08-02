import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { useTheme } from 'react-native-elements';

interface CustomTextProps extends TextProps {
  black?: boolean;
}

const Text = ({ style, black, ...rest }: CustomTextProps) => {
  const { theme } = useTheme();

  return (
    <RNText
      style={[
        style,
        {
          fontFamily: 'WorkSans-Regular',
          color: black ? theme.colors.black : theme.colors.white,
        },
      ]}
      {...rest}
    />
  );
};

export default Text;
