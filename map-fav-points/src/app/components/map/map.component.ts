import { logging } from 'protractor';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  center = {lat: -34.590199, lng: -58.398819};
  zoom = 15;
  display?: google.maps.LatLngLiteral;
  markers: [] = [];
  @Output() position: EventEmitter<string> = new EventEmitter<string>();
  // @ViewChild('map') map: GoogleMap;

  constructor() { }

  ngOnInit(): void {
  }

  // addMarker(event: google.maps.MouseEvent) {
  //   let marker =
  //   this.markers.push({
  //     position: {
  //       lat: event.latLng.lat,
  //       lng: event.latLng.lng
  //     },
  //     label: {
  //       color: 'red',
  //       text: ''
  //     },
  //     title: 'Test',
  //     options: {
  //       draggable: false,
  //       animation: google.maps.Animation.DROP
  //     }
  //   });
  //   this.position.emit(event.latLng.toString())
  // }

  addMarker() {
  //   this.markers.push({
  //     position: {
  //       lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
  //       lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
  //     },
  //     label: {
  //       color: 'red',
  //       text: 'Marker label ' + (this.markers.length + 1),
  //     },
  //     title: 'Marker title ' + (this.markers.length + 1),
  //     info: 'Marker info ' + (this.markers.length + 1),
  //     options: {
  //       animation: google.maps.Animation.BOUNCE,
  //     },
  //   })
  }
}
