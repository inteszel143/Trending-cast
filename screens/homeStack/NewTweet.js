import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Keyboard } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export default function NewTweet() {
    const navigation = useNavigation();

    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["55%"];
    const [isOpen, setIsOpen] = useState(false);

    function handlePresentModal() {
        bottomSheetModalRef.current?.present();
        Keyboard.dismiss();
        setTimeout(() => {
            setIsOpen(true);
        }, 100)
    };

    function ViewBottomModalSheet() {
        return (
            <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                backgroundStyle={{ borderRadius: 20 }}
                onDismiss={() => setIsOpen(false)}
            >
                <View style={styles.contentContainer} >
                    <Text style={[styles.tittle, { marginBottom: 20 }]} >Dark mode</Text>
                </View>

            </BottomSheetModal>
        )
    }

    return (
        <BottomSheetModalProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: isOpen ? "gray" : "#fff" }} >
                {/* TOP */}

                <View style={[styles.row, { marginTop: 20, }]} >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Text
                            style={{
                                fontWeight: '400',
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
                        multiline
                        autoFocus={true}
                        style={{
                            fontWeight: '400',
                            fontSize: 20,
                        }}
                    />
                </View>

                {/* PUBLIC */}

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        marginTop: '75%',
                        gap: 8,
                    }}
                    onPress={handlePresentModal}
                >
                    <FontAwesome name="globe" size={15} color={'gray'} />
                    <Text
                        style={{
                            fontWeight: '400',
                            fontSize: 15,
                            color: '#1da1f1',
                        }}
                    >Everyone can reply</Text>

                </TouchableOpacity>

                {ViewBottomModalSheet()}
            </SafeAreaView>
        </BottomSheetModalProvider>
    )
}

const styles = StyleSheet.create({
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },

    contentContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    tittle: {
        fontWeight: '900',
        letterSpacing: .5,
        fontSize: 15,
    },
    subTitle: {
        color: "#101318",
        fontSize: 14,
        fontWeight: 'bold',
    },
    description: {
        color: "#56636F",
        fontSize: 13,
        fontWeight: "normal",
        width: "100%",
    }
})