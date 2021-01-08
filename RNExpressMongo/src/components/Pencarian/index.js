import React, { useState } from 'react'
import {
    StyleSheet, Text,
    View, Picker,
    TextInput, TouchableOpacity
} from 'react-native'

const Pencarian = () => {

    const [selectedValue, setSelectedValue] = useState("name")
    return (
        <View style={styles.container}>
            <View style={{ margin: 12 }}>
                <Text style={styles.textInput}>Search By</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Name" value="name" />
                    <Picker.Item label="Email" value="email" />
                    <Picker.Item label="Phone" value="phone" />
                    <Picker.Item label="Address" value="address" />
                </Picker>
            </View>


            <View style={{ margin: 12 }}>
                <Text style={styles.textInput}>Username</Text>
                <TextInput style={styles.input} placeholder="masukan nama anda" />
            </View>

            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity style={styles.button} onPress={() => { console.log('hallo') }}>
                    <Text style={styles.btnText}>Search</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default Pencarian

const styles = StyleSheet.create({
    container: {
        marginBottom: 4,
        width: '90%'
    },
    judul: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#6C63FF'
    },
    subJudul: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#6C63FF'
    },
    input: {
        borderWidth: 1,
        color: 'black',
        paddingHorizontal: 5,
        paddingVertical: 4
    },
    textInput: {
        color: '#FF6584',
        fontSize: 17,
        marginBottom: 2,
        fontWeight: 'bold'
    },
    button: {
        margin: 12,
        textAlign: 'center',
        paddingVertical: 8,
        width: '40%',
        display: 'flex',
        backgroundColor: '#6C63FF'
    }
    ,
    btnText: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
