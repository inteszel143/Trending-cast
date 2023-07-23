import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'

export default function Search() {
    const data = [
        {
            top: 'Only on Twitter - Trending',
            hast: '#MissGrandPhilippines2023',
            tweets: "4, 890"
        },
        {
            top: 'Trending in Philippines',
            hast: '#New Marites',
            tweets: "240K"
        },
        {
            top: 'Only on Twitter - Trending',
            hast: '#Raining in Davao City',
            tweets: "8, 990"
        },
        {
            top: 'Music - Trending',
            hast: '#Momo',
            tweets: "112K"
        },
        {
            top: 'Trending in Philippines',
            hast: '#Herlene',
            tweets: "1, 666"
        },

    ]

    return (
        <SafeAreaView style={styles.container} >

            <View
                style={{
                    paddingVertical: 10,
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '800',
                    }}
                >Trends for you</Text>
            </View>

            {/* TRENDS */}
            <View>
                {
                    data.map((item, i) => (
                        <TouchableOpacity
                            key={i}
                            style={{
                                paddingVertical: 15,
                            }}
                        >
                            <Text style={styles.top} >{item.top}</Text>
                            <Text style={styles.hast} >{item.hast}</Text>
                            <Text style={styles.tweets} >{item.tweets} tweets</Text>
                        </TouchableOpacity>
                    ))
                }

                <Text
                    style={{
                        marginTop: 10,
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#1da1f1',
                    }}
                >
                    Show more
                </Text>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 15,
    },
    top: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray',
    },
    hast: {
        fontSize: 17,
        fontWeight: 'bold',
        paddingVertical: 3,
    },
    tweets: {
        fontSize: 15,
        fontWeight: '400',
        color: 'gray',
    },
})