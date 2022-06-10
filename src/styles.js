import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 70,
    flex: 1,
    backgroundColor: "#30353D",
  },
  viewOn: {
    display: "flex",
  },
  viewOff: {
    display: "none",
  },
  containerData: {
    marginVertical: 5,
    flexDirection: "column",
  },
  titleText: {
    paddingLeft: 15,
    marginVertical: 5,
  },
  data: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },
  listParana: {
    backgroundColor: "#f5b36f",
    borderRadius: 5,
    padding: 5,
  },
  listSantafe: {
    backgroundColor: "#F5E67A",
    borderRadius: 5,
    padding: 5,
  },
  dataText: {
    paddingLeft: 5,
  },
  parana: {
    backgroundColor: "#f5b36f",
  },
  santafe: {
    backgroundColor: "#F5E67A",
  },
});

export default styles;
