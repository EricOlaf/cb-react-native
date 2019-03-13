import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>My Header</Text>
    </View>
  );
};
let { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Header;
