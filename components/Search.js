import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button
} from "react-native";

class Search extends Component {
  state = {
    userText: ""
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{
            height: 40,
            width: 250,
            borderColor: "gray",
            borderWidth: 1
          }}
          onChangeText={text => this.setState({ userText: text })}
          value={this.state.userText}
          placeholder={"Enter User Name to find repos"}
        />
        <Button
          title="SEARCH"
          onPress={async () => {
            await this.props.searchUser(this.state.userText);
            this.setState({ userText: "" });
          }}
        />
      </View>
    );
  }
}
let { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: width,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Search;
