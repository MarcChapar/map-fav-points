import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  places = ["place 1", "place 2"]

  constructor() { }

  ngOnInit(): void {
  }

  handlePosition(position) {
    this.places.push(position)
  }
}
