import "react-native-gesture-handler";
import { StyleSheet, Text, View, LogBox } from 'react-native';
import Navigation from "./Navigation";
LogBox.ignoreAllLogs();//Ignore all log notifications
export default function App() {
  return <Navigation />;
};
