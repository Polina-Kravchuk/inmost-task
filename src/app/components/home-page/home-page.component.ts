import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  genres = [{
    name: 'rock',
    color: '#FF0000',
    img:'./assets/images/rock.jpg'
  }, {
    name: 'electronic',
    color: '#7FFFD4',
    img:'./assets/images/electronic.jpg'
  },{
    name: 'alternative',
    color: '#FFA500',
    img:'./assets/images/alternative.jpg'
  },{
    name: 'indie',
    color: '#98FB98',
    img:'./assets/images/indie.jpg'
  },{
    name: 'pop',
    color: '#FF00FF',
    img:'./assets/images/pop.jpg'
  },{
    name: 'jazz',
    color: '#000080',
    img:'./assets/images/jazz.jpg'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
