import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  useColorScheme,
  useWindowDimensions,
} from "react-native";
import { tweets } from "../../data/tweets";
import Tweet from "../../components/Tweet";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useRef, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export default function Feed() {
  const navigation = useNavigation();
  const theme = useColorScheme();
  const { width } = useWindowDimensions();

  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["55%", "80%"];
  const [darkMode, setDarkMode] = useState(false);
  const [device, setDevice] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  function handlePresentModal() {
    bottomSheetModalRef.current?.present();
    setTimeout(() => {
      setIsOpen(true);
    }, 100)
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        // <Pressable onPress={() => navigation.openDrawer()}>
        //   <Image
        //     source={require("../../assets/images/beto.jpeg")}
        //     style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
        //   />
        // </Pressable>
        <Pressable
          onPress={handlePresentModal}
        >
          <Image
            source={require('../../assets/images/shining.png')}
            style={{
              width: 28,
              height: 28,
              marginRight: 17,
            }}
          />
        </Pressable>
      ),
      // headerRight: () => <Button title="Test" />
    });
  }, []);

  function ViewBottomModalSheet() {
    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 20 }}
        onDismiss={() => setIsOpen(false)}
      >
        <View style={styles.contentContainer} >
          <Text style={[styles.tittle, { marginBottom: 20 }]} >Dark mode</Text>

          <View style={styles.row} >
            <Text style={styles.subTitle} >Dark mode</Text>
            <Switch
              value={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </View>

          <View style={styles.row} >
            <Text style={styles.subTitle} >Use device settings</Text>
            <Switch
              value={device}
              onChange={() => setDevice(!device)}
            />
          </View>

          <Text style={styles.description} >
            Set dark mode to use the Light or Dark selection located in your device Display and Brightness settings.
          </Text>

          <View
            style={{
              width: width,
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: "gray",
              marginVertical: 30,
            }}
          />

          <Text style={[styles.tittle, { width: "100%" }]} >Theme</Text>
          <Pressable style={styles.row} >
            <Text style={styles.subTitle} >Dim</Text>
          </Pressable>

        </View>
      </BottomSheetModal>
    )
  }



  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme === "dark" ? "#000" : '#FFFFFF' }}>
        <FlatList
          data={tweets.slice(0, 30)}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return <Tweet tweet={item} />;
          }}
          // ListHeaderComponent={() => (
          //   <View style={styles.header}>
          //     <Text style={styles.headerTitle}>New tweets available</Text>
          //   </View>
          // )}
          ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
        />

        {/* Bottom Button */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 25,
            right: 20,
          }}
          onPress={() => navigation.navigate("NewTweet")}
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
            <Ionicons name="ios-add" size={25} color={'#FFFFFF'} />
          </View>
        </TouchableOpacity>
        {ViewBottomModalSheet()}
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({

  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
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
});