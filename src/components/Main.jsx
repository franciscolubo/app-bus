import { View } from "react-native";
import styles from "../styles.js";
import Data from "./Data.jsx";
import StyledText from "./StyledText";

export default function Main(props) {
  return (
    <View style={styles.titleBus}>
      {
        <View>
          <StyledText
            type="subtitle"
            fontWeight="bold"
          >
            {props.Salida.includes("Terminal")
              ? "Paraná - Santa Fe"
              : "Santa Fe - Paraná"}{" "}
            - {props.type === 1 ? props.Tipo : props.Horario}
          </StyledText>
          {
            props.type === 1 ?
              <View>
                <View>
                  <Data {...props} />
                </View>
              </View> :
              <View></View>
          }
        </View>
      }
    </View>
  );
}
