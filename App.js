import React, { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, Animated } from "react-native";
import Main from "./src/components/Main.jsx";
import horarios from "./horarios.json";
import styles from "./src/styles";
import StyledText from "./src/components/StyledText.jsx";
import setNewStops from "./helpers/setNewStops.js";
import setHour from "./helpers/setHour.js";

export default function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const reset = () => {
    setForceUpdate(!forceUpdate);
  };

  let newHorarios = setNewStops();
  setHour(reset, newHorarios);

  useEffect(() => {
    if (!isAnimated) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      setIsAnimated(true);
    }
  });

  return (
    <View style={styles.container}>
      {newHorarios.length > 0 ? (
        <Animated.FlatList
          style={{ opacity: fadeAnim }}
          data={newHorarios}
          ItemSeparatorComponent={() => <Text> </Text>}
          renderItem={({ item: newHorarios }) => <Main {...newHorarios} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <StyledText>No hay ningun horario por ahora en Paraná</StyledText>
      )}
    </View>
  );
}
