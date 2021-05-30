import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.page.html',
  styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {

  cat: any;

  categories: any;
  restaurants: any;
    constructor(
      private _http :RestaurantService,
      private c_http :CategoryService,
      private router : Router) { }

    ngOnInit() {
      this.cat=localStorage.getItem('cat');
      //this.getcat();
    }
    resForm = new FormGroup({
      image_res : new FormControl('', Validators.required),
      nameRes : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),

    });

    addRes(){
      const values = this.resForm.value;
      this._http.addres(values.image_res,values.nameRes, values.description,this.cat).subscribe(data => {
        if(data['error']!=true){
          window.alert("Submitted...");
          this.router.navigate(["/restaurant-list/"+this.cat]);
          this.getres(this.cat);
           }else{
          alert(data['message'])
        }
      },
        err => {
      //show error toast when the server went wrong
      console.log(err);
        }
      );
    }

    //get category
    getres(cat:any){
      this._http.getresbycat(cat)
      .subscribe(
        club => {
          this.restaurants= club['data'];
          console.log(this.restaurants);
        },
        error => {
          console.log(error);
        });
    }

}
