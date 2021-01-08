import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TampilData = ({ nama, email, hp, alamat }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.displayText}>
                Nama : <Text style={{ fontWeight: 'bold' }}>{nama}</Text>
            </Text>
            <Text style={styles.displayText}>
                Email :  <Text style={{ fontWeight: 'bold' }}>{email}</Text>
            </Text>
            <Text style={styles.displayText}>
                Hp : <Text style={{ fontWeight: 'bold' }}>{hp}</Text>
            </Text>
            <Text style={styles.displayText}>
                Alamat : <Text style={{ fontWeight: 'bold' }}>{alamat}</Text>
            </Text>
        </View>
    )
}

export default TampilData

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: '90%',
        marginTop: 8,
        paddingVertical: 12,
        paddingHorizontal: 15,
        color: 'black'
    },
    displayText: {
        fontSize: 16
    }
})
