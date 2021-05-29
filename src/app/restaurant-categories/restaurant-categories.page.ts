import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-restaurant-categories',
  templateUrl: './restaurant-categories.page.html',
  styleUrls: ['./restaurant-categories.page.scss'],
})
export class RestaurantCategoriesPage implements OnInit {

  categories :any =[];

  constructor(private categorieServ : CategoryService) { }
  ngOnInit() {
this.getcat();
  }
getcat(){
  this.categorieServ.getcat()
  .subscribe(
    club => {
      this.categories= club['data'];
      console.log(this.categories);
    },
    error => {
      console.log(error);
    });
}

  ionViewWillEnter() {
    //this.categories = this.categorieServ.getCategories();
  }

}
