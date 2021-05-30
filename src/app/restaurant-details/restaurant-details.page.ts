import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {
  restaurant: any =[];
  id: string;

  constructor( private http:RestaurantService ,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
   this.getresbyid(this.id);
  }
  getresbyid(id:any){
    this.http.getresbyid(id)
    .subscribe(
      club => {
        this.restaurant= club['data'];
        console.log(this.restaurant);
      },
      error => {
        console.log(error);
      });
  }
}
