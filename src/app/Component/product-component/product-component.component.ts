import { Component, OnInit } from '@angular/core';
import { PostService } from '../../Service/post.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css'],
})
export class ProductComponentComponent implements OnInit {
  constructor(public post: PostService, public route: Router) {}

  product;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  faBars = faBars;

  ngOnInit(): void {
    this.post.viewProd().subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  prodDetails(id) {
    this.route.navigate(['productsingle', id]);
  }
}
