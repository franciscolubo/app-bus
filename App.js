import React, { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, Animated } from "react-native";
import Main from "./src/components/Main.jsx";
import horarios from "./horarios.json";
import styles from "./src/styles";
import StyledText from "./src/components/StyledText.jsx";

export default function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  let d = new Date().toLocaleTimeString().slice(0, 5);
  let parana = horarios.Parana.filter((item) => item.Horario >= d);
  let santaFe = horarios.SantaFe.filter((item) => item.Horario >= d);
  parana = parana.slice(0, 3);
  santaFe = santaFe.slice(0, 3);
  let newHorarios = parana.concat(santaFe);

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
  let j = 3;
  if (newHorarios.length === 2) j = 1;
  else if (newHorarios.length === 4) j = 2;
  if (
    newHorarios[0].Horario.slice(0, 2) > d.slice(0, 2) ||
    newHorarios[j].Horario.slice(0, 2) > d.slice(0, 2)
  ) {
    let tiempo = (60 - d.slice(3)) * 60000;
    let tiempo2 = (60 - d.slice(3)) * 60000;
    if (tiempo2 < tiempo) tiempo = tiempo2;
    if (tiempo === 0) {
      tiempo = 20000;
    }
    console.log(tiempo, d.slice(3));
    setTimeout(() => {
      reset();
    }, tiempo);
  } else {
    let tiempo = (newHorarios[0].Horario.slice(3) - d.slice(3)) * 60000;
    let tiempo2 = (newHorarios[j].Horario.slice(3) - d.slice(3)) * 60000;
    if (tiempo2 < tiempo) tiempo = tiempo2;
    if (tiempo === 0) {
      tiempo = 20000;
    }
    console.log(tiempo);
    setTimeout(() => {
      reset();
    }, tiempo);
  }
  const reset = () => {
    setForceUpdate(!forceUpdate);
  };
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
