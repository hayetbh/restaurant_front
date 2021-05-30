import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private _http:HttpClient) { }
  //get by id :res/getbyid (id)
  getresbyid(id :any) {
    return this._http.post<any>(
      "http://127.0.0.1:5001" + "/res/getbyid", {
        id:id
      }

    );
  }
  //get by cat : /res/getbycat (cat)
  getresbycat(cat :any) {
    return this._http.post<any>(
      "http://127.0.0.1:5001" + "/res/getbycat", {
        cat:cat
      }

    );
  }
  ///res/addres ( image_res,nameRes,description,cat)
  addres(image_res:any,nameRes:any,description:any, cat:any){
    return this._http.post<any>(
      "http://127.0.0.1:5001" + "/res/addres",   {
         nameRes: nameRes,
         image_res : image_res,
         description:description,
         cat:cat
      }

      );
  }
  // delete: /res/deleteres (id)
  deleteres(id :any) {
    return this._http.post<any>(
      "http://127.0.0.1:5001" + "/res/deleteres", {
        id:id
      }

    );
  }
}
