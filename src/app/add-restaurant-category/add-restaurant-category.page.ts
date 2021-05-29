import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-restaurant-category',
  templateUrl: './add-restaurant-category.page.html',
  styleUrls: ['./add-restaurant-category.page.scss'],
})
export class AddRestaurantCategoryPage implements OnInit {
name: any;
image:any;
  constructor(
    private categorieService : CategoryService,
    private router : Router) { }

  ngOnInit() {
  }
  categoryForm = new FormGroup({

    name : new FormControl('', Validators.required),
    image : new FormControl('', Validators.required)
  });

  addCategory(){
    const values = this.categoryForm.value;
    this.categorieService.addres(values.name,values.image).subscribe(data => {
      if(data['error']!=true){
        window.alert("Submitted...");
        this.router.navigate(["/restaurant-categories"]);

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

  //console.log("Submitted...");
    //const values = this.categoryForm.value;
    //console.log(values);
    //const newCategory = new Category(values.id, values.nom, values.image);
    //this.categorieService.addCategory(newCategory);
   // this.router.navigate(["/restaurant-categories"]);
}
