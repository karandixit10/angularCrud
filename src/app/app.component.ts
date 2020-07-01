import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCrud';
  // tslint:disable-next-line: ban-types
  allItem: Object;
  isEdit = false;
  itemObj = {
    name: '',
    price: ''

  }

  constructor(private commonService: CommonService){
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(){
   this.getAddedItem();
  }

  addItem(formObj){
    console.log(formObj);
    this.commonService.addItem(formObj).subscribe((Response) => {
      console.log('Item Added');
      this.getAddedItem();
    })
  }
  getAddedItem(){
    this.commonService.getAllItem().subscribe((Response) => {
      this.allItem = Response;
    })
  }
  editItem(item){
    this.isEdit = true;
    this.itemObj = item;
  }

  deleteItem(item){
    this.commonService.deleteItem(item).subscribe(() => {
      this.getAddedItem();
    })
  }

  updateItem(){
    this.isEdit = !this.isEdit;
    this.commonService.updateItem(this.itemObj).subscribe(() => {
      this.getAddedItem();
    })
  }
}

