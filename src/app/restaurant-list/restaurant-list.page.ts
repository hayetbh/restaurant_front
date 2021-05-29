import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {
  categories: any=[];

  constructor( private http:CategoryService) { }

  ngOnInit() {
    this.getcat();
  }
getcat(){
  this.http.getcat()
  .subscribe(
    club => {
      this.categories= club['data'];
      console.log(this.categories);
    },
    error => {
      console.log(error);
    });
}
}
