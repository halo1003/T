import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbts-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      '/src/assets/slide1.jpg',
      '/src/assets/slide2.jpg',
      '/src/assets/slide3.jpg'
      ];
  }

}

