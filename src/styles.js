import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ec9f1f",
    flex: 1,
  },
  containerGeneral: {
    backgroundColor: "#CCC",
    margin: 20,
    marginVertical: 57,
    borderRadius: 15,
    padding: 15,
    flex: 1
  },

  //! Styles for temp. day
  containerTemp: {
    alignContent: "center"
  },
  title: {
    textAlign: "center"
  },
  allTemp: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  tempImage: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  //! Styles bus
  containerOneBus: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    alignItems: "center",
    backgroundColor: "#fae76d",
    borderRadius: 10,
    padding: 5
  },
  dataOneBus: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  titleBus: {
    marginTop: 20,
    backgroundColor: "#fae76d",
    borderRadius: 10,
    padding: 5
  },
  counter: {
    flex: 0.3
  },
  data: {
    flex: 0.6
  },


  //! Loading
  loadBus: {
    backgroundColor: '#ec9f1f',
    height: Dimensions.get('window').height,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
