import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

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
    err: null,
    info: false,
    user: "",
    repoName: "",
    showMore: false,
    repo: {}
  };

  searchUser = name => {
    let goodRepos = [];
    this.setState({ loading: true });
    fetch(
      `https://api.github.com/users/${name}/repos?fork=false&sort=stars&order=desc`
    )
      .then(response => response.json())
      .then(data => {
        data.sort(function(a, b) {
          return b.stargazers_count - a.stargazers_count;
        });

        this.setState({ repos: data, loading: false, info: true });
      })
      .catch(error => {
        console.log(error);
        this.setState({ err: error, loading: false });
      });
  };

  openMoreInfo = (rN, u) => {
    this.setState({ loading: true });
    fetch(`https://api.github.com/repos/${u}/${rN}/readme`)
      .then(response => response.json())
      .then(data => {
        console.log("DATA:", data);
        this.setState({ repo: data });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ showMore: true });
  };

  render() {
    const {
      repos,
      loading,
      info,
      err,
      user,
      repoName,
      showMore,
      repo
    } = this.state;
    // console.log(repos);

    return (
      <View style={styles.container}>
        <Header repos={repos} info={info} />
        <Search searchUser={this.searchUser} />
        <RepoList
          repos={repos}
          loading={loading}
          err={err}
          openMoreInfo={this.openMoreInfo}
        />
        <RepoMoreInfo repo={repo} showMore={showMore} />
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
