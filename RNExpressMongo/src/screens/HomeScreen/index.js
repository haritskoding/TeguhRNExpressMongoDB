import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native'
import Pencarian from '../../components/Pencarian'
import TampilData from '../../components/TampilData';
import Axios from 'axios'

const HomeScreen = () => {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        let repeat;
        try {

            await Axios.get("https://teguh-rn1-ujian.herokuapp.com/data")

                .then(res => {
                    console.log('item: ', res.data);
                    setUsers(res.data);
                    console.log(users, 'ds')
                })

            repeat = setTimeout(getData, 1000)
        } catch (error) {
            console.error(error.message)
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.judul}>ini Home </Text>
            <Text style={styles.subJudul}>@teguh.m.harits</Text>
            <>
                <Pencarian getData={getData} />
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
