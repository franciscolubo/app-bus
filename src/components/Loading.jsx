import { useEffect } from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import styles from '../styles'

export default function Loading() {
    return (
        <View style={styles.loadBus}>
            <Svg height="150" viewBox="0 0 11 11" width="150"><Path d="m3 0c-1 0-2 .5312-2 2v4 3.5s0 .5.5.5l.5.0156v.4844s0 .5.5.5h.5s.5 0 .5-.5v-.4844l4-.0156v.5s0 .5.5.5h.5c.5 0 .5-.5.5-.5v-.4844l.5-.0156s.5 0 .5-.5v-3.5-4c0-1.5-1-2-2-2zm.75 1h3.5c.1385 0 .25.1115.25.25s-.1115.25-.25.25h-3.5c-.1385 0-.25-.1115-.25-.25s.1115-.25.25-.25zm-.75 1h5c1 0 1 1 1 1v2s0 1-1 1h-5c-1 0-1-1-1-1v-2s0-1 1-1zm-.25 5.5c.4142 0 .75.3358.75.75s-.3358.75-.75.75-.75-.3358-.75-.75.3358-.75.75-.75zm5.5 0c.4142 0 .75.3358.75.75s-.3358.75-.75.75-.75-.3358-.75-.75.3358-.75.75-.75z" stroke={'black'} strokeWidth={0.4} fill={'#FDF8F6'} />
            </Svg>
        </View>
    )
}