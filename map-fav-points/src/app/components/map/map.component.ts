import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = -34.590199;
  lng = -58.398819

  constructor() { }

  ngOnInit(): void {

  }

}
