import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  TouchableHighlight
} from "react-native";

const RepoList = props => {
  _renderItem = ({ item }) => {};
  let loadingText = <Text style={styles.warningText}>LOADING</Text>;
  let names = props.repos.map((r, i) => {
    return (
      <View style={styles.repoCard} key={r.id}>
        <TouchableHighlight
          onPress={() => {
            props.openMoreInfo(r.full_name);
          }}
        >
          <Text>{r.name}</Text>
        </TouchableHighlight>
        <Text>{r.stargazers_count}</Text>
        <Text>{r.description}</Text>
        <Text>languages:{r.language}</Text>
      </View>
    );
  });
  return (
    <View style={styles.container}>
      {props.err ? (
        <Text>{props.err}</Text>
      ) : props.loading ? (
        loadingText
      ) : (
        <ScrollView>{names}</ScrollView>
      )}
    </View>
  );
};
let { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 5,
    width: width,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center"
  },
  repoCard: {
    height: 100,
    width: 300,
    backgroundColor: "gray",
    margin: 5
  },
  warningText: {
    color: "white",
    fontSize: 3,
    width: width
  }
});

export default RepoList;
