import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
export default function NewMessage() {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "New Message",
            headerTitleStyle: {
                fontSize: 16,
                fontWeight: '800',
            }
        })
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#fff",
            }}
        >

            {/* TO */}
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    gap: 8,
                }}
            >
                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 17,
                    }}
                >Send to: </Text>
                <TextInput
                    placeholder='Find people'
                    autoFocus
                    style={{
                        fontWeight: '500',
                        fontSize: 17,
                    }}
                />
            </View>

            {/* <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>Go back</Text>
            </TouchableOpacity> */}

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

});