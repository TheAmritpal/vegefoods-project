import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../Service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-category-component',
  templateUrl: './view-category-component.component.html',
  styleUrls: ['./view-category-component.component.css'],
})
export class ViewCategoryComponentComponent implements OnInit {
  constructor(public post: PostService, public actroute: Router) {}

  category;

  ngOnInit() {
    this.post.viewCate().subscribe(
      (res) => {
        this.category = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('complete');
      }
    );
  }
  delete(id) {
    console.log(id);
    var con = confirm('Are you sure?');
    if (con == true) {
      this.post.delCate(id).subscribe(
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
