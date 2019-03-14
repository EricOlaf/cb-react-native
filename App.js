import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import RepoList from "./components/RepoList";
import Search from "./components/Search";
// import RepoMoreInfo from "./components/RepoMoreInfo";

class App extends React.Component {
  state = {
    repos: [],
    userInput: "",
    moreInfo: "",
    loading: false,
    err: ""
  };

  searchUser = name => {
    let goodRepos = [];
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => {
        console.log(response.json());
      })
      // .then(data => {
      //   console.log(data);
      // })
      .catch(error => {
        this.setState({ err: error });
      });
  };

  render() {
    // const { repos } = this.state;
    // console.log(repos);
    return (
      <View style={styles.container}>
        <Header />
        <Search searchUser={this.searchUser} />
        <RepoList repos={this.state.repos} />
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

// goodRepos = response.filter(r => {
//   return r.fork === false;
// });
// response.sort(function(a, b) {
//   return a.stargazers_count - b.stargazers_count;
// })
// console.log(response)
// .then(this.setState({ repos: goodRepos }))
// .catch(err => {
//   this.setState({ err: err });
// })
// .then(this.setState({ loading: false }));
