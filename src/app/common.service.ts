import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  addItem(item){
    return this._http.post('http://localhost:3000/ItemName', item);

  }
  getAllItem(){
    return this._http.get('http://localhost:3000/ItemName');
  }
  updateItem(item){
    return this._http.put('http://localhost:3000/ItemName/' + item.id, item);
  }

  deleteItem(item){
    return this._http.delete('http://localhost:3000/ItemName/' + item.id);
  }
}

