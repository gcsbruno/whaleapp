import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  type?: 'cta' | 'cancel' | 'custom';
  icon?: JSX.Element;
  width?: number 
};

const Button = ({ title, onPress, type }: ButtonProps): JSX.Element => {
  const buttonStyle =
    type === 'cta' ? styles.ctaButton : styles.cancelButton;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ctaButton: {
    backgroundColor: '#227BE5',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  cancelButton: {
    backgroundColor: '#F9507A',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
