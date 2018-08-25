import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import Colors from "../styles/index";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import InputField from "../components/form/InputField";

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log in</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={Colors.white}
              textColor={Colors.white}
              borderBottomColor={Colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
            />

            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={Colors.white}
              textColor={Colors.white}
              borderBottomColor={Colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.green01
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1
  },
  loginHeader: {
    fontSize: 34,
    color: Colors.white,
    fontWeight: "300",
    marginBottom: 40
  }
});
