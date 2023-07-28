import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Feed from './screens/tabScreen/Feed'
import Notifications from './screens/tabScreen/Notifications';
import Setting from './screens/tabScreen/Setting';
import Search from './screens/tabScreen/Search';
import { Payments, Profile, Lists, Topics, Bookmarks, Purchases, Monetization, Moments, Signout } from './screens/drawerScreens';

import { Ionicons } from '@expo/vector-icons';
import TweetDetailsScreen from './screens/homeStack/TweetDetailsScreen';
import NewMessage from './screens/homeStack/NewMessage'
import NewTweet from './screens/homeStack/NewTweet'
import { View, Image, Pressable, StatusBar, useColorScheme } from 'react-native'



// TOP TABS

const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup({ navigation }) {
    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                },
                tabBarIndicatorStyle: {
                    height: 3,
                    borderRadius: 5,
                    backgroundColor: '#1da1f1',
                }
            }}
        >
            <TopTabs.Screen name="main" component={Feed} />
            <TopTabs.Screen name="Following" component={Payments} />
            <TopTabs.Screen name="Followers" component={Payments} />
        </TopTabs.Navigator>
    )
};


// NOTIFICATION

function TopNotifyGroup() {
    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                },
                tabBarIndicatorStyle: {
                    height: 3,
                    borderRadius: 5,
                    backgroundColor: '#1da1f1',
                }
            }}
        >
            <TopTabs.Screen name="All" component={Feed} />
            <TopTabs.Screen name="Mentions" component={Payments} />
        </TopTabs.Navigator>
    )
}


//STACK
const HomeStack = createNativeStackNavigator();
function HomeStackGroup() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="TabGroup"
                component={TabGroup}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="TweetDetailsScreen"
                component={TweetDetailsScreen}
                options={{
                    presentation: "modal",

                }}
            />
            <HomeStack.Screen
                name='NewMessage'
                component={NewMessage}
                options={{
                    // presentation: "transparentModal"
                    presentation: "modal"
                }}
            />
            <HomeStack.Screen
                name='NewTweet'
                component={NewTweet}
                options={{
                    headerShown: false,
                    presentation: "fullScreenModal"
                }}
            />
        </HomeStack.Navigator>
    )
};

//TABS BOTTOM
const Tab = createBottomTabNavigator();
function TabGroup({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                // tabBarStyle: {
                //     borderTopWidth: 0,
                // },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused ? "ios-home" : "ios-home-outline";
                    } else if (route.name === "Search") {
                        iconName = focused ? "ios-search" : "ios-search-outline";
                    } else if (route.name === "Notifications") {
                        iconName = focused ? "ios-notifications" : "notifications-outline";
                    } else if (route.name === "Messages") {
                        iconName = focused ? "md-mail-open-outline" : "ios-mail-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarLabelStyle: {
                    display: "none"
                },
                tabBarActiveTintColor: "#1da1f1",
                tabBarInactiveTintColor: "gray"

            })}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: "@edzelintes143",
                    headerTitle: () => (
                        <Image
                            source={require('./assets/images/centerIcon.png')}
                            style={{
                                width: 38,
                                height: 38,
                            }}
                        />
                    ),
                    headerStyle: {
                        shadowColor: 'transparent', // this covers iOS
                        elevation: 0, // this covers Android
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()} >
                            <Image
                                source={require('./assets/images/avatar.jpg')}
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 100,
                                    marginLeft: 15,
                                }}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable>

                        </Pressable>
                    )
                }} />
            < Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerStyle: {
                        shadowColor: 'transparent',
                        elevation: 0,
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '800',
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()} >
                            <Image
                                source={require('./assets/images/avatar.jpg')}
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 100,
                                    marginLeft: 15,
                                }}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable>
                            <Ionicons name="ios-settings-outline" size={24} style={{ marginRight: 15, }} />
                        </Pressable>
                    )
                }}

            />
            <Tab.Screen
                name="Notifications"
                component={TopNotifyGroup}
                options={{
                    headerStyle: {
                        shadowColor: 'transparent',
                        elevation: 0,
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: '800',
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()} >
                            <Image
                                source={require('./assets/images/avatar.jpg')}
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 100,
                                    marginLeft: 15,
                                }}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable>
                            <Ionicons name="ios-settings-outline" size={24} style={{ marginRight: 15, }} />
                        </Pressable>
                    )
                }}
            />
            <Tab.Screen
                name="Messages"
                component={Setting}
                options={{
                    headerStyle: {
                        shadowColor: 'transparent',
                        elevation: 0,
                    },
                    headerTitleStyle: {
                        fontSize: 22,
                        fontWeight: '800',
                    },
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.openDrawer()} >
                            <Image
                                source={require('./assets/images/avatar.jpg')}
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 100,
                                    marginLeft: 15,
                                }}
                            />
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable>
                            <Ionicons name="ios-settings-outline" size={24} style={{ marginRight: 15, }} />
                        </Pressable>
                    )
                }}

            />
        </Tab.Navigator >
    )
};


// DRAWER
const Drawer = createDrawerNavigator();
function DrawerGroup() {
    return (
        <Drawer.Navigator

            screenOptions={({ route, navigation }) => ({
                headerShown: false,
                drawerIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === "Profile") {
                        iconName = "person-outline"
                    } else if (route.name === "Lists") {
                        iconName = "ios-clipboard-outline"
                    } else if (route.name === "Lists") {
                        iconName = "ios-clipboard-outline"
                    } else if (route.name === "Topics") {
                        iconName = "chatbubble-ellipses-outline"
                    } else if (route.name === "Bookmarks") {
                        iconName = "bookmark-outline"
                    } else if (route.name === "Moments") {
                        iconName = "logo-react"
                    } else if (route.name === "Purchases") {
                        iconName = "ios-cart-outline"
                    } else if (route.name === "Monetization") {
                        iconName = "card-outline"
                    } else if (route.name === "Signout") {
                        iconName = "log-out-outline"
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
        >
            <Drawer.Screen name="Edzel Paras Intes" component={HomeStackGroup} options={{
                drawerIcon: () => (
                    <Image
                        source={require('./assets/images/avatar.jpg')}
                        style={{
                            width: 38,
                            height: 38,

                        }}
                    />
                ),
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: '700',
                }
            }} />
            {/* <Drawer.Screen name="Payments" component={Payments} options={{ headerShown: true }} /> */}
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
            <Drawer.Screen name="Lists" component={Lists} options={{ headerShown: true }} />
            <Drawer.Screen name="Topics" component={Topics} options={{ headerShown: true }} />
            <Drawer.Screen name="Bookmarks" component={Bookmarks} options={{ headerShown: true }} />
            <Drawer.Screen name="Moments" component={Moments} options={{ headerShown: true }} />
            <Drawer.Screen name="Purchases" component={Purchases} options={{ headerShown: true }} />
            <Drawer.Screen name="Monetization" component={Monetization} options={{ headerShown: true }} />
            <Drawer.Screen name="Signout" component={Signout} />

        </Drawer.Navigator>
    )
}


export default function Navigation() {

    const currentTheme = useColorScheme();

    return (
        <NavigationContainer
            theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <StatusBar
                style="auto" />
            {/* <HomeStackGroup /> */}
            < DrawerGroup />
        </NavigationContainer >
    )
}