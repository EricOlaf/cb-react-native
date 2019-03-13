import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RepoMoreInfo = () => {
  return (
    <View style={styles.container}>
      <Text>My RepoMoreInfo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RepoMoreInfo;
