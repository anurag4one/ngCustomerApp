import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../model/customer.model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  customer: CustomerModel;
  phone: string;
  submitted: boolean = false;
  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.customer = new CustomerModel();
  }
  findCustomer() {
    this.customer = this.service.findCustomer(this.phone);
    if (this.customer != null)
      this.submitted = true;
    else
      alert("No Such Customer !!");
  }

}
