import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Colors from "../../styles/index";
import { TouchableHighlight, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";

export default class NextArrowButton extends Component {
  render() {
    const { disabled, handleNextArrow } = this.props;
    const opacityStyle = disabled
      ? { backgroundColor: "rgba(255,255,255,0.2)" }
      : { backgroundColor: "rgba(255,255,255,0.6)" };
    return (
      <TouchableHighlight
        style={[opacityStyle, styles.button]}
        onPress={handleNextArrow}
      >
        <Icon
          name="facebook"
          size={32}
          color={Colors.white}
          style={styles.icon}
        />
      </TouchableHighlight>
    );
  }
}

NextArrowButton.propTypes = {
  handleNextArrow: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    background: Colors.white,
    width: 60,
    height: 60
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  }
});
