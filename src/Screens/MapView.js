import PropTypes from 'prop-types';
import React from "react";
import { requireNativeComponent } from "react-native";

class MapView extends React.Component {
    _onRegionChange = (event) => {
        if (!this.props.onRegionChange) {
          return;
        }
    
        // process raw event...
        this.props.onRegionChange(event.nativeEvent);
      };

    render() {
      return <RNTMap {...this.props} onRegionChange = {this._onRegionChange} />;
    }
  }
  
  MapView.PropTypes = {
      /** gestures to zoom in and out of the map */

      zoomEnabled: PropTypes.bool,

      /** The region to be displayed by the map */

      region: PropTypes.shape({

        /** Coordinates for the center of the map */
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,

        /** Distance between the minimum and the maximum latitude/longitude */
        latitudeDelta: PropTypes.number.isRequired,
        longitudeDelta: PropTypes.number.isRequired,
      }),

        /** Callback that is called continuously when the user is dragging the map */
        onRegionChange: PropTypes.func,

  };

  var RNTMap = requireNativeComponent('RNTMap');

  module.exports = MapView

export default MapView