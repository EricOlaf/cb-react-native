import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const Header = props => {
  let repo = props.repos.filter((r, i) => {
    return i === 0;
  });
  return (
    <View style={styles.container}>
      {/* {
        props.info ?
      <Text>{repo.owner.login}</Text>
      <Image
          style={{width: 50, height: 50}}
          source={{uri:repo.owner.avatar_url}}
        /> : <Text>header</Text>
        } */}
      <Text>header</Text>
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
