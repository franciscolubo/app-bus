import React from "react";
import { View } from "react-native";
import styles from "../styles";
import StyledText from "./StyledText";

export default function Data({ Salida, Horario, Tipo, Empresa }) {
  return (
    <View>
      <View style={styles.dataOneBus}>
        <StyledText
          color="textSecondary"
          fontWeight="semibold"
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
      <View style={styles.dataOneBus}>
        <StyledText
          color="textSecondary"
          fontWeight="semibold"
        >
          Empresa:{" "}
        </StyledText>
        <StyledText fontWeight="semibold" color="textPrimary">
          {Empresa}
        </StyledText>
      </View>
      <View style={styles.dataOneBus}>
        <StyledText
          color="textSecondary"
          fontWeight="semibold"
        >
          Proxima llegada:{" "}
        </StyledText>
        <StyledText fontWeight="semibold" color="textPrimary">
          {Horario}
        </StyledText>
      </View>
      <View style={styles.dataOneBus}>
        <StyledText
          color="textSecondary"
          fontWeight="semibold"
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
  );
}
