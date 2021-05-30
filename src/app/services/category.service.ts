import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private _http:HttpClient) { }
  getcat() {
    return this._http.post<any>(
      "http://127.0.0.1:5001" + "/cat/getcat", ""

    );
  }
  ///cat/addcat (name , image)
  addcat(name:any,image:any){
    return this._http.post<any>(
      "http://127.0.0.1:5001" + "/cat/addcat",   {

         name: name,
         image : image
      }

      );
  }
}
