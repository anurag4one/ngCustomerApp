import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../model/customer.model';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customers: CustomerModel[];

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.customers = this.service.listCustomer();
  }
  sortByName() {
    this.customers = this.service.sortByName();
  }
  sortByAge() {
    this.customers = this.service.sortByAge();
  }
  deleteCustomer(index: number) {
    var ans = confirm("You sure Homey ??!");
    if (ans) {
      this.service.deleteCustomer(index);
    }
  }
}
