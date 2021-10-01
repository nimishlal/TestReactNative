import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <View  style={styles.container}>
      <div className="App">
        <h1 className="center animate__animated animate__pulse pt-5 c">
          Fiji Radio App
        </h1>
        <div>
          <div className="text-center pt-5">
            <h1>Radio Fiji 2</h1>
            <audio controls>
              <source
                src="http://peridot.streamguys.com:7150/RFTwo"
                type="audio/mp3"
              />
            </audio>
          </div>
          <div className="text-center">
            <h1>Radio navtarang fiji</h1>
            <audio controls preload="auto">
              <source
                src="https://stream.fijivillage.com/navtarang?ver=636650.mp3"
                type="audio/mp3"
              ></source>
            </audio>
          </div>
          <div className="text-center">
            <h1>Radio Sargam</h1>
            <audio controls preload="auto">
              <source
                src="https://stream.fijivillage.com/radiosargam"
                type="audio/mp3"
              ></source>
            </audio>
          </div>
        </div>
        <div className="text-center">
          <h1>Bula FM Fiji</h1>
          <audio controls>
            <source
              src="http://peridot.streamguys.com:7150/Bula"
              type="audio/mp3"
            ></source>
          </audio>
        </div>
        <div className="text-center">
          <h1>Radio Mirchi Fiji</h1>
          <audio width="" height="" controls>
            <source
              src="http://peridot.streamguys.com:7150/Mirchi"
              type="audio/mp3"
            />
          </audio>
        </div>

        <div className="pt-5 text-center">
          <Button
            onPress={refreshPage}
            title="Click to reload!"
            color="pink"
            accessibilityLabel="Click to reload!"
          />
        </div>
        <footer className="colorFooter text-center">
          Made By Chidoro Batkau V1.0 MixKarDo
        </footer>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
  coral:{
    color: 'coral'
  }
});
