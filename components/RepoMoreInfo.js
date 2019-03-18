import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";

const RepoMoreInfo = props => {
  // componentDidMount(props) {
  //   fetch(
  //     `https://api.github.com/repos/${this.props.user}/${
  //       this.props.repoName
  //     }/readme`
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ repo: data });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  return (
    <ScrollView style={styles.container}>
      <Text>{props.repo}</Text>
    </ScrollView>
  );
};

let { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  }
});

export default RepoMoreInfo;
