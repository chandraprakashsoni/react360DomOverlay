import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  NativeModules,
} from 'react-360';

export default class scapic_react_360 extends React.Component {
  constructor() {
    super();
    this._toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    NativeModules.DomOverlayModule.openOverlay();
  }

  render() {
    this._toggleDisplay();
    return (
      <View style={styles.panel}>
        <VrButton style={styles.triggerButton}  onClick={this._toggleDisplay}>
          <Text style={styles.triggerText}>Show Overlay</Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('scapic_react_360', () => scapic_react_360);
