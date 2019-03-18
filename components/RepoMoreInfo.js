import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

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
    <View>
      {props.showMore ? (
        <Text style={styles.container}>{props.repo.content}</Text>
      ) : null}
    </View>
  );
};

let { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default RepoMoreInfo;
