import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import StyledText from "./StyledText";

export default function Data({ Salida, Horario, Tipo, Empresa }) {
  return (
    <View style={styles.containerData}>
      <View
        style={Salida.includes("Terminal") ? styles.parana : styles.santafe}
      >
        <View style={styles.data}>
          <StyledText
            style={styles.dataText}
            color="textSecondary"
            fontWeight="bold"
          >
            Parada:{" "}
          </StyledText>
          <StyledText fontWeight="semibold" color="textPrimary">
            {Tipo === "P"
              ? "Plaza Alberdi (Paraná)"
              : Tipo === "FP"
              ? "Facultades del Pozo (UNL)"
              : Tipo === "FD"
              ? "Facultad de Derecho (UNL FCJS)"
              : `${Salida}`}
          </StyledText>
        </View>
        <View style={styles.data}>
          <StyledText
            style={styles.dataText}
            color="textSecondary"
            fontWeight="bold"
          >
            Empresa:{" "}
          </StyledText>
          <StyledText fontWeight="semibold" color="textPrimary">
            {Empresa}
          </StyledText>
        </View>
        <View style={styles.data}>
          <StyledText
            style={styles.dataText}
            color="textSecondary"
            fontWeight="bold"
          >
            Proxima llegada:{" "}
          </StyledText>
          <StyledText fontWeight="semibold" color="textPrimary">
            {Horario}
          </StyledText>
        </View>
        <View style={styles.data}>
          <StyledText
            style={styles.dataText}
            color="textSecondary"
            fontWeight="bold"
          >
            Tipo:{" "}
          </StyledText>
          <StyledText fontWeight="semibold" color="textPrimary">
            {Tipo === "D"
              ? "Directo"
              : Tipo === "R"
              ? "Recorrido"
              : Tipo === "D/R"
              ? "Directo/Recorrido"
              : Tipo === "P"
              ? "Sale de Plaza Alberdi (Paraná)"
              : Tipo === "RP"
              ? "Hace recorrido hasta Plaza Alberdi (Paraná)"
              : Tipo === "FP"
              ? "Sale desde Facultades del Pozo (UNL)"
              : Tipo === "FD"
              ? "Sale desde la Facultad de Derecho (UNL FCJS)"
              : ""}
          </StyledText>
        </View>
      </View>
    </View>
  );
}
