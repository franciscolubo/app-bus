import { Platform } from "react-native";

export default async function getWeather(location) {

    let lat, lon;
    if (Platform.OS === 'web') {
        lat = location[0]
        lon = location[1]
    } else if (Platform.OS === 'android') {
        lat = location.coords.latitude
        lon = location.coords.longitude
    }

    return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2fce6d79338105db1081d2f033550d1`)
        .then(response => response.json())
}
