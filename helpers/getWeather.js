import { Platform } from "react-native";
import { KEY_API } from "@env"

export default async function getWeather(location) {
    let lat, lon;
    if (Platform.OS === 'web') {
        lat = location[0]
        lon = location[1]
    } else if (Platform.OS === 'android') {
        lat = location.coords.latitude
        lon = location.coords.longitude
    }
    console.log(KEY_API)

    return await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API}`)
        .then(response => response.json())
}
