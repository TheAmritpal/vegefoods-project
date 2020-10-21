import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(public http: HttpClient, public route: Router) {}

  isLogin: boolean = false;

  checkLogin() {
    if (localStorage.hasOwnProperty('token') == true) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  cart = [];

  name: string;
  userId;
  checkout;

  addCate(data) {
    return this.http.post('http://localhost:8000/api/category', data);
  }

  viewCate() {
    return this.http.get('http://localhost:8000/api/category');
  }

  getCate(id) {
    return this.http.get('http://localhost:8000/api/category/' + id + '/edit');
  }

  editCate(data, id) {
    return this.http
      .post('http://localhost:8000/api/category/' + id + '?_method=PUT', data)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('complete');
        }
      );
  }

  delCate(id) {
    return this.http.delete('http://localhost:8000/api/category/' + id);
  }

  addProd(data) {
    return this.http.post('http://localhost:8000/api/product', data);
  }

  viewProd() {
    return this.http.get('http://localhost:8000/api/product');
  }

  getProd(id) {
    return this.http.get('http://localhost:8000/api/product/' + id + '/edit');
  }

  editProd(data, id) {
    return this.http
      .post('http://localhost:8000/api/product/' + id + '?_method=PUT', data)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Complete');
        }
      );
  }

  delProd(id) {
    return this.http.delete('http://localhost:8000/api/product/' + id);
  }

  reg(data) {
    return this.http.post('http://localhost:8000/api/register', data);
  }

  login(data) {
    return this.http.post('http://localhost:8000/api/login', data);
  }

  getSingleProd(id) {
    return this.http.get('http://localhost:8000/api/product/' + id);
  }

  getCart(val) {
    return this.http.post('http://localhost:8000/api/cart', val);
  }

  viewCateProd(id) {
    return this.http.get('http://localhost:8000/api/getCategory/' + id);
  }

  addOrder(data) {
    return this.http.post('http://localhost:8000/api/order', data);
  }

  addOrderDetails(data) {
    return this.http.post('http://localhost:8000/api/orderdetails', data);
  }

  viewUser() {
    return this.http.get('http://localhost:8000/api/view');
  }

  viewOrders() {
    return this.http.get('http://localhost:8000/api/order');
  }

  viewOrderDetails(id) {
    return this.http.get('http://localhost:8000/api/orderdetails/' + id);
  }
}
