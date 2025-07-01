import BottomHeader from "@/components/ui/BottomHeader/BottomHeaderProfile";
import ProfileHeader from "@/components/ui/ProfileHeader";
import React from "react";
import { Dimensions, StyleSheet, View } from 'react-native';
import ProfileLayout from "./TabsProfile/_layout";

const screenWidth = Dimensions.get('window').width;

export default function Profile() {
  return (
    <View style={styles.container}>
      <BottomHeader/>
      <ProfileHeader />
      <ProfileLayout/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});