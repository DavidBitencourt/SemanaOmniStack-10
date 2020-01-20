import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function Profile({ navigation }) {
  const github_username = navigation.getParam("github_username");
  console.log(github_username);
  console.log(navigation.getParam("github_username"));

  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${github_username}` }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff"
  }
});
