import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-product-single-component',
  templateUrl: './product-single-component.component.html',
  styleUrls: ['./product-single-component.component.css'],
})
export class ProductSingleComponentComponent implements OnInit {
  constructor(public router: ActivatedRoute, public post: PostService) {}

  id;
  product;
  cartprod: any = [];
  alert: boolean = false;

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    this.post.getSingleProd(this.id).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addCart(id) {
    if (this.post.cart.includes(id)) {
      alert('Product Already exist!');
    } else {
      if (sessionStorage.getItem('cart')) {
        this.post.cart.push(id);
        sessionStorage.setItem('cart', JSON.stringify(this.post.cart));
        this.alert = true;
        this.ngOnInit();
      } else {
        this.post.cart.push(id);
        sessionStorage.setItem('cart', JSON.stringify(this.post.cart));
        this.alert = true;
        this.ngOnInit();
      }
    }
  }
  close() {
    this.alert = false;
  }
}
