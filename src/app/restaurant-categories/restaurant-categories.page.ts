import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-restaurant-categories',
  templateUrl: './restaurant-categories.page.html',
  styleUrls: ['./restaurant-categories.page.scss'],
})
export class RestaurantCategoriesPage implements OnInit {

  categories :any =[];

  constructor(private categorieServ : CategoryService,private  router: Router ) { }
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
res(e:any){
  this.router.navigate(['/restaurant-list/'+e]);
  localStorage.setItem("cat",e);
}
  ionViewWillEnter() {
    //this.categories = this.categorieServ.getCategories();
  }

}
