import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Loggedout from "./screens/LoggedOut";
import Login from "./screens/Login";
class App extends Component {
  render() {
    // return <Loggedout />;
    return <Login />;
  }
}

export default App;
