import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#8aacc8",
    flex: 1,
  },
  containerGeneral: {
    backgroundColor: "#e6ffff",
    margin: 20,
    marginVertical: 57,
    borderRadius: 20,
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
    backgroundColor: "#82b3c9",
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
    backgroundColor: "#82b3c9",
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
