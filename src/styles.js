import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 70,
    flex: 1,
    backgroundColor: "#900c3e",
  },
  list: {
    paddingLeft: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#000",
    backgroundColor: "#fff",
  },
  viewOn: {
    backgroundColor: "#fff",
  },
  viewOff: {
    display: "none",
  },
  containerData: {
    marginVertical: 5,
    flexDirection: "column",
  },
  titleText: {
    borderBottomWidth: 40,
  },
  data: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },
});

export default styles;
