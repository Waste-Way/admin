//* import map and build map
import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

//* Build map
class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        markers: [],
        popup: false,
        popupInfo: {},
        };
    }
    
    componentDidMount() {
        this.setState({
        markers: this.props.markers,
        });
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.markers !== this.props.markers) {
        this.setState({
            markers: this.props.markers,
        });
        }
    }
    
    //* Build map
    render() {
        const { lat, lng, zoom, markers } = this.state;
        const position = [lat, lng];
        const icon = new Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        });
        return (
        <Map center={position} zoom={zoom}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position} icon={icon}>
                <Popup>
                <span>{marker.title}</span>
                </Popup>
            </Marker>
            ))}
        </Map>
        );
    }
}