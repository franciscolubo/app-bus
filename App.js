import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, Platform } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

import StyledText from "./src/components/StyledText.jsx";
import styles from "./src/styles";

import Main from "./src/components/Main.jsx";
import setNewStops from "./helpers/setNewStops.js";
import setHour from "./helpers/setHour.js";
import Loading from "./src/components/Loading.jsx";
import getLocation from "./helpers/getLocation.js";
import getWeather from "./helpers/getWeather.js";

export default function App() {
  const [forceUpdate, setForceUpdate] = useState(false);
  const [charge, setCharge] = useState(false)
  const [data, setData] = useState({})
  const [location, setLocation] = useState({})
  let newHorarios = [];
  let horarios = [];
  let tiempo = 0;

  const reset = () => {
    setForceUpdate(!forceUpdate);
  };

  if (data.name !== undefined) {
    newHorarios = setNewStops(data.name);
    if (newHorarios.length > 0) {
      tiempo = setHour(reset, newHorarios) === 20000 ? 0 : setHour(reset, newHorarios)
      horarios = newHorarios.shift()
    }
  }

  useEffect(() => {
    getLocation()
      .then(lngLat => setLocation(lngLat))

    if (location.length > 0 || Object.values(location).length > 0) {
      getWeather(location)
        .then(geolocation => setData(geolocation))
    }
  }, [location.length > 0 || Object.values(location).length > 0]);

  return (
    <>
      {
        Object.values(data).length > 0 && newHorarios.length > 0 ?
          (<View style={styles.background}>
            <View style={styles.containerGeneral}>
              <View style={styles.containerTemp}>
                <StyledText style={styles.title} type="bigTitle" >{data.name}</StyledText>
                <View style={styles.allTemp}>
                  <View style={styles.tempImage}>
                    <Image
                      source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
                      style={{ width: 100, height: 100 }}
                    />
                    <StyledText fontWeight="semibold" fontSize="subheading">Temp {Math.ceil(data.main.temp - 273.15)}°C</StyledText>
                  </View>
                  <View>
                    <StyledText fontWeight="semibold" fontSize="subheading">Max. {Math.ceil(data.main.temp_max - 273.15)}°C</StyledText>
                    <StyledText fontWeight="semibold" fontSize="subheading">Min. {Math.floor(data.main.temp_min - 273.15)}°C</StyledText>
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.containerOneBus}>
                  <View style={styles.data}>
                    <Main {...horarios} type={1} />
                  </View>
                  <View style={styles.counter}>
                    <CountdownCircleTimer
                      styles={styles.circleTimer}
                      isPlaying
                      duration={(tiempo / 1000)}
                      colors={['#5e0000']}
                      size={100}
                    // colorsTime={[7, 5, 2, 0]}
                    // colorsTime={[(tiempo / 1000), (tiempo / 1000) - ((tiempo / 1000) / 4), (tiempo / 1000) - ((tiempo / 1000) / 2), (tiempo / 1000) - (((tiempo / 1000) / 4) * 3), (tiempo / 1000) / 4]}
                    >
                      {({ remainingTime }) => <Text>{Math.ceil(remainingTime / 60)}"</Text>}
                    </CountdownCircleTimer>
                  </View>
                </View>
                <FlatList
                  data={newHorarios}
                  ItemSeparatorComponent={() => <Text> </Text>}
                  renderItem={({ item: newHorarios }) => <Main {...newHorarios} type={2} />}
                  keyExtractor={(item) => item.id}
                />
              </View>

            </View>
          </View>
          ) : (
            <Loading />
          )
      }
    </>
  );
}
