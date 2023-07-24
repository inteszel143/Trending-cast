import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Setting() {
    const { navigate } = useNavigation();

    return (
        <SafeAreaView style={styles.container} >
            <Text
                style={{
                    fontSize: 30,
                    paddingLeft: 30,
                    fontWeight: '800',
                }}
            >Send a message, get a message</Text>

            <Text
                style={{
                    paddingVertical: 15,
                    fontSize: 15,
                    paddingLeft: 30,
                    paddingHorizontal: 30,
                    color: 'gray',
                }}
            >
                Direct Message are private conversation between you and other people on Twitter, Share Tweets, media, and more!
            </Text>

            <TouchableOpacity
                style={{
                    marginTop: 20,
                    width: 200,
                    height: 50,
                    backgroundColor: '#1da1f1',
                    borderRadius: 30,
                    marginLeft: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 50,
                }}
                onPress={() => navigate("NewMessage")}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '800',
                        color: "#FFFFFF",
                    }}
                >Write a message</Text>
            </TouchableOpacity>


            {/* BUTTOM */}

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 25,
                    right: 20,
                }}
                onPress={() => navigate("NewMessage")}
            >
                <View
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 40,
                        backgroundColor: '#1da1f1',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Ionicons name="mail-unread-outline" size={25} color={'#FFFFFF'} />
                </View>
            </TouchableOpacity>






        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    }
})