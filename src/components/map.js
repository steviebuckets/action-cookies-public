import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  onMarkerClick(props, marker, e){
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClicked(props){
    if(this.state.showingInfoWindow){
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
render() {
    return (
      <div className="maps">
        <Map google={this.props.google} onClick={this.onMapClicked} initialCenter={{
          lat: 34.1808392,
          lng: -118.30896610000002
          }}
          style={{
            width: "40%",
            height: "30%"
          }} zoom={10}>

          <Marker
            onClick={this.onMarkerClick}
            name={'Chimney Coffee House'}
            position={{lat: 34.0635269, lng: -118.232835799999998}} />

          <Marker
            onClick={this.onMarkerClick}
            name={'Caffe Vita'}
            website={'http://www.mysideofthecity.com/'}
            position={{lat: 34.098037, lng: -118.28648290000001}} />

          <Marker
            onClick={this.onMarkerClick}
            name={'Kafn'}
            position={{lat: 34.13273849999999, lng: -118.24221410000001}} />

          <Marker
            onClick={this.onMarkerClick}
            name={'Kaldi Coffee'}
            position={{lat: 34.117174, lng: -118.26222559999997}} />

          <Marker
            onClick={this.onMarkerClick}
            name={'Bru CoffeeBar'}
            position={{lat: 34.1050017, lng: -118.29152490000001}} />

            <Marker
            onClick={this.onMarkerClick}
            name={'Naturewell'}
            position={{lat: 34.09125119999999, lng: -118.2795466}} />

            <Marker
            onClick={this.onMarkerClick}
            name={'Andante Coffee'}
            position={{lat: 34.07772420000001, lng: -118.2654417}} />

            <Marker
            onClick={this.onMarkerClick}
            name={'Tomatoe Pie'}
            position={{lat: 34.1159004, lng: -118.15378880000003}} />

            <Marker
            onClick={this.onMarkerClick}
            name={'Tomatoe Pie'}
            position={{lat: 34.1039773, lng: -118.27362800000003}} />

            <Marker
            onClick={this.onMarkerClick}
            name={'The Green Bean'}
            position={{lat: 34.1273615, lng: -118.21050350000002}} />

            <Marker
            onClick={this.onMarkerClick}
            name={'Ground Zero Performance Cafe'}
            position={{lat: 34.0194859, lng: -118.28214489999999}} />

            <Marker
            onClick={this.onMarkerClick}
            name={'Pilars Cafe'}
            position={{lat: 34.2742968, lng: -118.5648081}} />

            <Marker
            onClick={this.onMarkerClick}
            name={'Howlin Rays'}
            position={{lat: 34.0612681, lng: -118.23915679999999}} />


           <InfoWindow
             marker={this.state.activeMarker}
             visible={this.state.showingInfoWindow}
             onClose={this.onInfoWindowClose}>
               <div>
                 <a href={this.state.selectedPlace.website}><p>{this.state.selectedPlace.name}</p></a>
               </div>
           </InfoWindow>





       </Map>
      </div>
          );
      }
}

export default GoogleApiWrapper({ apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')})(MapContainer)
