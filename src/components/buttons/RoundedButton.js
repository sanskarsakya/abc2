import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import { PropTypes } from "prop-types";
import Colors from "../../styles/index";
export default class RoundedButton extends Component {
  render() {
    const { text, textColor, icon, background, handleOnPress } = this.props;
    const backgroundColor = background || "transparent";
    const color = textColor || Colors.black;
    return (
      <TouchableHighlight
        style={[{ backgroundColor: backgroundColor }, styles.wrapper]}
      >
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[{ color }, styles.buttonText]} onPress={handleOnPress}>
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 15,
    borderRadius: 40,
    borderColor: Colors.white,
    borderWidth: 1,
    marginBottom: 15
    // alignItems:'center'
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  buttonText: {
    fontSize: 16,
    width: "100%",
    textAlign: "center"
  }
});
