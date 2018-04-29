import {Component, OnInit} from '@angular/core';

import {AppService} from './shared/app.service';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links = [{name: 'home', title: 'home works again'},
    {name: 'authentication', title: 'authentication works again'},
    {name: 'categories', title: 'categories work again'},
    {name: 'playlist', title: 'playlist works again'},
    {name: 'releases', title: 'releases works again'},
    {name: 'selected-categories', title: 'selected-categorie works again'}];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getSpotifyToken().subscribe (response => {
      this.appService.returnStatus().emit ();
    });
  }
}
