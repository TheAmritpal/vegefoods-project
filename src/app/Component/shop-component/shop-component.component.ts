import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-component',
  templateUrl: './shop-component.component.html',
  styleUrls: ['./shop-component.component.css'],
})
export class ShopComponentComponent implements OnInit {
  constructor(public post: PostService, public router: Router) {}

  category;

  ngOnInit(): void {
    this.post.viewCate().subscribe(
      (response) => {
        this.category = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  nav() {
    this.router.navigate(['shop/category/1']);
  }
}
