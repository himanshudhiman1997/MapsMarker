import React from 'react';
import {StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import MapView, {
  Marker,
  PROVIDER_DEFAULT,
  ProviderPropType,
} from 'react-native-maps';
import bikeImg from './component/assets/images/bike_icon.png';

const SPACE = 0.01;
const timeout = 500;
const LATITUDE = 12.9778658;
const LONGITUDE = 77.6880128;
const markerId = ['Marker1'];
let animationTimeout;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: {
        latitude: LATITUDE + SPACE,
        longitude: LONGITUDE + SPACE,
      },
    };
  }

  componentDidMount() {
    animationTimeout = setTimeout(() => {
      this.focus1();
    }, timeout);
  }

  componentWillUnmount() {
    if (animationTimeout) {
      clearTimeout(animationTimeout);
    }
  }

  focusMap(marker, animated) {
    this.map.fitToSuppliedMarkers(marker, animated);
  }

  focus1() {
    animationTimeout = setTimeout(() => {
      this.focusMap([markerId[0]], true);
    }, timeout);
  }

  onRegionChange(region) {
    this.setState({region});
  }
  render() {
    var mapStyle = [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}],
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}],
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}],
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}],
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}],
      },
    ];
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_DEFAULT}
          customMapStyle={mapStyle}
          ref={ref => {
            this.map = ref;
          }}>
          <Marker
            identifier="Marker1"
            coordinate={this.state.a}
            draggable
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
            image={bikeImg}
          />
        </MapView>
        {/* <TouchableOpacity style={styles.btn}>
          <Button color="#000000" title="Track Live Location" />
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // marginBottom: 50,
  },
  // btn: {
  //   marginBottom: 10,
  // },
});
