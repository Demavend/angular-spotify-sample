import {Component, OnInit} from '@angular/core';
import {AppService} from '../../shared/app.service';

@Component ({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories: string[];

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.returnStatus ().subscribe (() => {
      this.appService.getCategories ().subscribe (categories => {
        this.categories = categories;
        console.log(this.categories);
      });
    });
  }
}
