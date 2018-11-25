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
}
