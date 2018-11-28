import { Component } from '@angular/core';
import {Customer} from './CustomerApp.model'

@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
  styleUrls: ['./CustomerApp.component.css']
})
export class CustomerComponent {
  title = 'app';

  CustomerModel:Customer = new Customer();

  CustomerModels:Array<Customer> = new Array<Customer>();

  addCustomer(){

    this.CustomerModels.push(this.CustomerModel);
    this.CustomerModel = new Customer(); 
    
  }
}
