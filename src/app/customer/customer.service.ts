import { Injectable } from '@angular/core';
import { CustomerModel } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: CustomerModel[] = [];
  index: number;
  constructor() { }

  addCustomer(customer: CustomerModel) {
    this.customers.push(customer);
  }
  listCustomer() {
    return this.customers;
  }
  findCustomer(phone: string) {
    let result = this.customers.find(x => x.phone == phone);
    return result;
  }
  sortByAge() {
    this.customers.sort((a, b) => a.age > b.age ?
      1 : ((a.age < b.age) ? -1 : 0));
    return this.customers;
  }
  sortByName(){
    this.customers.sort((a,b) => a.name > b.name ? 1: ((a.name<b.name) ? -1:0));
    return this.customers;
  }
  deleteCustomer(index: number) {
    return this.customers.splice(index, 1);
  }
}
