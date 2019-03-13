import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import RepoList from "./components/RepoList";
import Search from "./components/Search";
import RepoMoreInfo from "./components/RepoMoreInfo";

class App extends React.Component {
  state = {
    repos: [],
    userInput: "",
    moreInfo: "",
    loading: false,
    err: ""
  };

  searchUser = name => {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/${name}/repos`).then(response => {
      this.setState({ repos: response });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Search searchUser={this.searchUser} />
        <RepoList repos={this.state.repos} />
        <RepoMoreInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
