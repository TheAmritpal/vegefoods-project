import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/Service/post.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css'],
})
export class CategoryProductsComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public post: PostService
  ) {}

  id;
  products;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  faBars = faBars;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.post.viewCateProd(this.id).subscribe(
      (response) => {
        this.products = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  prodDetails(id) {
    this.router.navigate(['productsingle', id]);
  }
}
