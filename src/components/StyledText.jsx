import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: 15,
    fontFamily: theme.fonts.main,
    fontWeight: '600'
  },
  subtitle: {
    color: '#000',
    fontSize: theme.fontSize.heading,
    fontWeight: theme.fontWeights.bold,
  },
  heading: {
    fontSize: theme.fontSize.heading,
  },
  subheading: {
    fontSize: theme.fontSize.subheading,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
  },
  normal: {
    fontWeight: theme.fontWeights.normal,
  },
  semibold: {
    fontWeight: theme.fontWeights.semibold,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  bigTitle: {
    fontSize: 30,
    fontWeight: 700,
    color: '#000',
    letterSpacing: 2
  },
  infoTitle: {
    textTransform: "uppercase"
  }
});

export default function StyledText({
  children,
  type,
  fontSize,
  color,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    style,
    type === 'bigTitle' && styles.bigTitle,
    type === "subtitle" && styles.subtitle,
    type === 'infoTitle' && styles.infoTitle,
    fontSize === "heading" && styles.heading,
    fontSize === "subheading" && styles.subheading,
    color === "textSecondary" && styles.textSecondary,
    fontWeight === "normal" && styles.normal,
    fontWeight === "semibold" && styles.semibold,
    fontWeight === "bold" && styles.bold,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
