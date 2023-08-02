import React from 'react';
import { StyleSheet } from 'react-native';

import Text from './index';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => (
  <Text style={styles.title}>{children}</Text>
);

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => (
  <Text style={styles.subtitle}>{children}</Text>
);

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => (
  <Text style={styles.paragraph}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 24,
    fontSize: 26,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    paddingHorizontal: 24,
    fontSize: 16,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    paddingHorizontal: 26,
    fontSize: 12,
    marginBottom: 16,
  },
});

export { Title, Subtitle, Paragraph };
