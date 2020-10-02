import { logging } from 'protractor';
import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  lat = -34.590199;
  lon = -58.398819;
  markers: google.maps.Marker[] = [];
  @Output() position: EventEmitter<string> = new EventEmitter<string>();
  map: google.maps.Map;
  
  constructor() { }

  ngAfterViewInit() {
  }

}
