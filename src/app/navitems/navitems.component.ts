import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent {
  
  navitems: Array<any>
  currentDate:any;
 
  countryList :any;
  country:any;
  cartTotal:any;
  constructor(private dataService:DataService) {
    this.currentDate= new Date();
    this.countryList = this.dataService.getCountryList();
    this.country='';
    
    this.navitems = [{
      text: "LOGIN",
      link: "login"
    },
    {
      text: "DASHBOARD",
      link: "dashboard"
    }
   
  ]
  };



}