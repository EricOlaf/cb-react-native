import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

class RepoMoreInfo extends Component {
  state = {
    repo: {}
  };
  componentDidMount(props) {
    fetch(
      `https://api.github.com/repos/${this.props.user}/${
        this.props.repoName
      }/readme`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ repo: data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render(props) {
    let { repo } = this.state;
    console.log(repo);
    return (
      <View>
        {this.props.showMore ? (
          <Text style={styles.container}>{repo.content}</Text>
        ) : null}
      </View>
    );
  }
}

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
