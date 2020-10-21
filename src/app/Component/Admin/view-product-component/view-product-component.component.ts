import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../Service/post.service';

@Component({
  selector: 'app-view-product-component',
  templateUrl: './view-product-component.component.html',
  styleUrls: ['./view-product-component.component.css'],
})
export class ViewProductComponentComponent implements OnInit {
  constructor(public post: PostService) {}

  product;

  ngOnInit() {
    this.post.viewProd().subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete');
      }
    );
  }
  delete(id) {
    var con = confirm('Are you sure?');
    if (con == true) {
      this.post.delProd(id).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.ngOnInit();
        }
      );
    }
  }
}
