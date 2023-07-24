import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function NewTweet() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }} >
            {/* TOP */}

            <View style={[styles.row, { marginTop: 20, }]} >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text
                        style={{
                            fontWeight: '500',
                            fontSize: 20,
                        }}
                    >Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: '#1da1f1',
                        paddingHorizontal: 18,
                        paddingVertical: 8,
                        borderRadius: 20,
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: '500',
                            fontSize: 17,
                        }}
                    >Tweet</Text>
                </TouchableOpacity>
            </View>

            {/* TWEET */}
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                marginLeft: 5,
                marginTop: 10,
                gap: 10,
            }} >
                <Image
                    source={require('../../assets/images/avatar.jpg')}
                    style={{
                        width: 40,
                        height: 40,
                    }}
                />

                <TextInput
                    placeholder="What's happening?"
                    autoFocus
                    style={{
                        fontWeight: '400',
                        fontSize: 20,
                    }}
                />
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    }
})