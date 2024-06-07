import { Alert, PixelRatio, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const fontScale = PixelRatio.getFontScale();

const Home = ({ }) => {
    const navigation = useNavigation()
    const [username, setUserName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("8073245656");

    const ValidateUserInput = () => {
        if (username == "") {
            Alert.alert("Please Enter Your Name!")
        }
        // else if (mobileNumber == "") {
        //     Alert.alert("Please Enter Your Mobile Number!")
        // } 
        else {
            navigation.navigate("VideoCallingScreen", { userName: username, mobileNumber: mobileNumber })
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <View style={{ marginVertical: 20 }}>
                <TextInput
                    style={{ backgroundColor: '#fff', fontSize: 20, margin: 10, borderRadius: 10, color: '#000' }}
                    placeholder='Enter UserName...'
                    placeholderTextColor={'#ccc'}
                    value={username}
                    onChangeText={(txt) => setUserName(txt)} />
                {/* <TextInput
                    style={{ backgroundColor: '#fff', fontSize: 20, margin: 10, borderRadius: 10, color: '#000' }}
                    placeholder='Enter Mobile Number...'
                    keyboardType='numeric'
                    placeholderTextColor={'#ccc'}
                    value={mobileNumber}
                    onChangeText={(txt) => setMobileNumber(txt)} /> */}
                <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: 'blue', borderRadius: 10, margin: 10, marginTop: 0 }}
                    onPress={() => ValidateUserInput()}>
                    <Text style={{ paddingVertical: 15, color: '#fff', textAlign: 'center', fontWeight: '900', fontSize: 16 * fontScale }}>Go to Video Calling Screen</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})