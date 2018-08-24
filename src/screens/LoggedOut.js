import React, { Component } from "react";
import Colors from "../styles/index";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

import RoundedButton from "../components/buttons/RoundedButton";

export default class LoggeOut extends Component {
  onFacebookPress() {
    alert("Facebook button pressed");
  }

  onCreateAccountPressed() {
    alert("Create Account button pressed");
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/imandyie/react-native-airbnb-clone/master/src/img/airbnb-logo.png"
            }}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
          <RoundedButton
            text="Continue with facebook"
            textColor={Colors.green01}
            background={Colors.white}
            icon={
              <Icon
                name="facebook"
                size={20}
                style={styles.facebookButonIcon}
              />
            }
            handleOnPress={this.onFacebookPress}
          />

          <RoundedButton
            text="Create Account"
            textColor={Colors.white}
            handleOnPress={this.onCreateAccountPressed}
          />
          <TouchableHighlight style={styles.moreOptionsButton}>
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>

          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping on continue, Create Account or more{" "}
            </Text>
            <Text style={styles.termsText}>options ,</Text>
            <Text style={styles.termsText}>I agree to Airbnb's </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Term of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Term of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscriminaton Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    backgroundColor: Colors.green01
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    marginTop: 30,
    padding: 20
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeText: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  facebookButonIcon: {
    color: Colors.green01,
    position: "relative",
    left: 20,
    zIndex: 8
  },
  moreOptionsButton: {
    marginTop: 15
  },
  moreOptionsButtonText: {
    color: Colors.white,
    fontSize: 16
  },
  termsAndConditions: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 30
  },
  termsText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: "600"
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.white
  }
});
