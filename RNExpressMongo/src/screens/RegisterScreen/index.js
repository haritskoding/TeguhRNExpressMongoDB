import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native'

const RegisterScreen = ({ navigation }) => {

    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [hp, setHp] = useState('');
    const [alamat, setAlamat] = useState('');

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState("false");
    const [button, setButton] = useState("Simpan");

    const Submit = () => {
        const data = {
            nama,
            email,
            hp,
            alamat
        }
        if (data.nama === '') {
            Alert.alert('Peringatan', 'Nama Harus diisi')
        } else if (data.email === '') {
            Alert.alert('Peringatan', 'Email harus diisi')
        } else if (data.hp === '') {
            Alert.alert('Peringatan', 'Hp harus diisi')
        } else if (data.alamat === '') {
            Alert.alert('Peringatan', 'Alamat harus diisi')
        } else {
            console.log(`data before send ${data.nama},${data.email},${data.hp},${data.alamat}`);
        }
        console.log('hallo submit')
    }


    
  



    return (
        <>
            <View style={styles.container}>
                <Text style={styles.judul}>ini register </Text>
                <Text style={styles.subJudul}>@teguh.m.harits</Text>
            </View>
            <>
                <View style={{ margin: 12 }}>
                    <Text style={styles.textInput}>Username</Text>
                    <TextInput
                        style={styles.input}
                        value={nama}
                        onChangeText={(value) => setNama(value)}
                        placeholder="masukan nama anda" />
                </View>

                <View style={{ margin: 12 }}>
                    <Text style={styles.textInput}>Phone</Text>
                    <TextInput
                        style={styles.input}
                        value={hp}
                        onChangeText={(value) => setHp(value)}
                        placeholder="masukan no hp anda" />
                </View>

                <View style={{ margin: 12 }}>
                    <Text style={styles.textInput}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        placeholder="masukan email anda" />
                </View>

                <View style={{ margin: 12 }}>
                    <Text style={styles.textInput}>Address</Text>
                    <TextInput
                        style={styles.input}
                        value={alamat}
                        onChangeText={(value) => setAlamat(value)}
                        placeholder="masukan alamat anda" />
                </View>

                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.button} onPress={Submit}>
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </>

        </>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 4
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
