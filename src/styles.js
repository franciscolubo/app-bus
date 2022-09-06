import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#2836FF",
    flex: 1,
  },
  containerGeneral: {
    backgroundColor: "#FDF8F6",
    margin: 20,
    marginVertical: 57,
    borderRadius: 10,
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
    alignItems: "center"
  },
  dataOneBus: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  },
  titleBus: {
    marginTop: 20
  },
  counter: {
    flex: 0.3
  },
  data: {
    flex: 0.5
  },


  //! Loading
  loadBus: {
    backgroundColor: '#2836FF',
    height: Dimensions.get('window').height,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
