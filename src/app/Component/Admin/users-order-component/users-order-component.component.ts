import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-users-order-component',
  templateUrl: './users-order-component.component.html',
  styleUrls: ['./users-order-component.component.css'],
})
export class UsersOrderComponentComponent implements OnInit {
  constructor(public post: PostService, public route: Router) {}

  orders;

  ngOnInit() {
    this.post.viewOrders().subscribe((response) => {
      this.orders = response;
    });
  }
}
