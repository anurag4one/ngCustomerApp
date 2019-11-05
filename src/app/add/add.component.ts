import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../model/customer.model';
import { CustomerService } from '../customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
customer: CustomerModel;

  constructor(private service: CustomerService, private route: Router) {
    this.customer = new CustomerModel();
   }

  ngOnInit() {
  }

  addCustomer(){
    this.service.addCustomer(this.customer);
    this.customer = new CustomerModel();
    this.route.navigate(['list']);
  }
}
