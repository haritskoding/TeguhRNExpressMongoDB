import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native'
import Pencarian from '../../components/Pencarian'
import TampilData from '../../components/TampilData'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.judul}>ini Home </Text>
            <Text style={styles.subJudul}>@teguh.m.harits</Text>
            <>
                <Pencarian />
            </>
            <>
                <TampilData nama="Teguh" email="teguh@gmail.com"
                    hp="0129182" alamat="JL.Kepodang No 21" />
                <TampilData nama="Intan" email="intan@gmail.com"
                    hp="0129182" alamat="JL.Kepodang No 21" />

            </>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    judul: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6C63FF'
    },
    subJudul: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#6C63FF'
    }
})
