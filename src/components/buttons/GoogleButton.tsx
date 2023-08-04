import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from 'react-native';


interface GoogleButtonProps {
  title: string;
  onPress: () => void;
  icon?: ImageSourcePropType;
}
const GoogleButton = ({ title, onPress, icon }: GoogleButtonProps) => (
  <TouchableOpacity style={styles.googleButton} onPress={onPress}>
    {icon && <Image source={icon} style={styles.googleIcon} />}
    <Text style={styles.googleText}>{title}</Text>

  </TouchableOpacity>
);

const styles = StyleSheet.create({
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 299,
    height: 48,
    borderRadius: 4,
    marginBottom: 16,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginLeft: 48,
  },
  googleText: {
    flex:1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
    marginLeft: 12,
  }
})


export default GoogleButton;