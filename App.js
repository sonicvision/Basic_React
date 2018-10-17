/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
const markers = [
  {
    title: "Coffee 1",
    description: "Good Coffee",
    latlng: {
      latitude: 37.78825,
      longitude: -122.4324
    }
  },
  {
    title: "Coffee 2",
    description: "Good Coffee",
    latlng: {
      latitude: 37.79995,
      longitude: -122.4334
    }
  }
];
//type Props = {};
export default class App extends React.Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    markers: markers
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView style={styles.mapView} initialRegion={this.state.region}>
            {this.state.markers.map(marker => (
              <Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
              >
                <Image
                  style={{ height: 50, width: 50 }}
                  source={require("./assets/coffee-icon.png")}
                />
              </Marker>
            ))}
          </MapView>
        </View>
        <Text style={styles.welcome}>Welcome to React Ok Native!</Text>
        <Text style={styles.instructions}>
          To get iououo started, Ok edit App.jsczczczxcxzczxczxczxczxczxc
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  mapContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch"
  },
  mapView: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
