import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
  IconAkun, IconAkunActive,
  Cabin, CabinAktif, Daftar, DaftarAktif,
  IconHome, IconHomeActive, IconPesanan, IconPesananActive
} from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
    if (label === "HomeScreen") return isFocused ? <CabinAktif /> : <Cabin />

    if (label === "RegisterScreen") return isFocused ? <DaftarAktif /> : <Daftar />


    return <IconHome />
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: (isFocused) => ({
    fontSize: 15,
    fontWeight: 'bold',
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 8
  })
});
