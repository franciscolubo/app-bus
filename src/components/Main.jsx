import React, { useRef, useState, useEffect } from "react";
import { Animated, View } from "react-native";
import styles from "../styles";
import Data from "./Data.jsx";
import StyledText from "./StyledText";

export default function Main(props) {
  const [hidden, setHidden] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const deployedButton = () => {
    setHidden(!hidden);
    console.log(hidden);
    if (!hidden) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={[styles.list]}>
      <StyledText
        style={styles.titleText}
        onPress={deployedButton}
        type="title"
      >
        {props.Salida.includes("Terminal")
          ? "Paraná - Santa Fe"
          : "Santa Fe - Paraná"}{" "}
        - {props.Tipo}
      </StyledText>
      <View style={!hidden ? styles.viewOff : styles.viewOn}>
        <Animated.View style={[styles.viewOn, { opacity: fadeAnim }]}>
          <Data {...props} />
        </Animated.View>
      </View>
    </View>
  );
}
