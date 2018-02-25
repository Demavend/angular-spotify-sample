import { Component, OnInit } from '@angular/core';

import { AppService } from './shared/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Albums gallery';
  public categories: string[];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getSpotifyToken().subscribe(response => {
      this.appService.getCategories().subscribe(categories => this.categories = categories);
    });
  }
}
