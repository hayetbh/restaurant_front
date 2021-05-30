import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {
  restaurants: any=[];
  cat: any;


  constructor( private http:RestaurantService ,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

    this.cat = this.route.snapshot.paramMap.get('id');
    this.getres(this.cat);
  }
 getres(cat:any){
  this.http.getresbycat(cat)
  .subscribe(
    club => {
      this.restaurants= club['data'];
      console.log(this.restaurants);
    },
    error => {
      console.log(error);
    });
}
details(e:any){
  this.router.navigate(['/restaurant-list/'+e]);
}
}
