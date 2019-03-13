import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RepoList = props => {
  return (
    <View style={styles.container}>
      <Text>My RepoList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RepoList;
