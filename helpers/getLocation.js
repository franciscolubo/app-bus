import { Platform } from 'react-native'
import * as Location from 'expo-location'

export default async function () {

    return new Promise(async (resolve, reject) => {
        if (Platform.OS === 'android') {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                reject()
            }

            let location = await Location.getCurrentPositionAsync({})
            resolve(location)
        } else if (Platform.OS === 'web') {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve([coords.latitude, coords.longitude])
                }, (err) => {
                    alert('No se pudo obtener la geolocalizacion')
                    console.log(err)
                    reject()
                })
        }
    })

}