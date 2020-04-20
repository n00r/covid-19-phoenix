import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import {items} from '../list'
import { Router } from '@angular/router';
import {ApiService} from '../api.service';



@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage {
  lists = items.map(obj=> ({ ...obj, qty: 0 }));
  count:any = 0;
  detailData : any;
  constructor(public platform : Platform,public apiService: ApiService,private router: Router) {
      this.detailData = this.router.getCurrentNavigation().extras.state;
      console.log(this.detailData)
  }
  addtocart(item){
    this.count  = this.count +1;
    item.qty = item.qty +1

  }
  removeocart(item){
    if(this.count == 0 || item.qty == 0) return;
    item.qty = item.qty -1
    this.count  = this.count -1;
  }
  

  random(){
    return Math.floor(Math.random() * Math.floor(1000))
  }
  

}
