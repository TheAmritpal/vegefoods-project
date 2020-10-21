import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Service/post.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    public route: Router,
    public post: PostService,
    public fb: FormBuilder
  ) {}

  details;
  checkoutForm: FormGroup;

  ngOnInit() {
    const checkout = JSON.parse(sessionStorage.getItem('checkout'));
    this.details = checkout;
    this.checkoutForm = this.fb.group({
      userId: [null, Validators.required],
      address: [null, Validators.required],
      contact: [null, Validators.required],
      payment: [null, Validators.required],
      total: [null, Validators.required],
    });
  }
  abc() {}
  checkSub() {
    const fd = new FormData();
    fd.append('userId', this.post.userId);
    fd.append('address', this.checkoutForm.get('address').value);
    fd.append('contact', this.checkoutForm.get('contact').value);
    fd.append('payment', this.checkoutForm.get('payment').value);
    fd.append('total', this.details[0].total);
    this.post.addOrder(fd).subscribe(
      (response) => {
        const det = {};
        for (let i = 0; i < this.details.length; i++) {
          det['orderId'] = response['order'].id;
          det['productId'] = this.details[i].id;
          det['quantity'] = this.details[i].quantity;
          this.post.addOrderDetails(det).subscribe(
            (response) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }
}
