import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

interface GoogleButtonProps {
  title: string;
  onPress: () => void;
  icon?: JSX.Element;
}
const GoogleButton = ({ title, onPress }: GoogleButtonProps) => (
    <TouchableOpacity style={styles.googleButton} onPress={onPress}>
      <Text style={styles.googleText}>{title}</Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    googleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      width: 299,
      height: 48,
      borderRadius: 4,
      marginBottom: 16,
    },
    googleIcon: {
      width: 24,
      height: 24,
      marginRight: 16,
    },
    googleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000',
    }
})


export default GoogleButton;