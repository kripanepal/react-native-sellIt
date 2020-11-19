import React, { useState } from 'react';
import {
  Alert, Button, Dimensions,
  Image, Platform, ScrollView, StatusBar, StyleSheet,
  Text, TouchableHighlight, TouchableOpacity,
  TouchableWithoutFeedback, View,
} from 'react-native';

import AppText from './components/AppText';
import ViewImage from './screens/ViewImage';
import Welcome from './screens/Welcome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './components/AppButton';
import Card from './components/Card';
import ListingDetail from './screens/ListingDetail';
import Messages from './screens/Messages';
import Screen from './components/Screen';
import Icon from './components/Icon';
import ListItem from './components/ListItem';
import AccountScreen from './screens/AccountScreen';
import ListingScreen from './screens/ListingScreen';
import { TextInput } from 'react-native-gesture-handler';
import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';
import LoginScreen from './screens/LoginScreen';
import ListingEditScreen from './screens/ListingEditScreen';

const data = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
]

export default function App() {

  const [category, setCategory] = useState();

  return (
    <Screen style={styles.main} >
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },

})


