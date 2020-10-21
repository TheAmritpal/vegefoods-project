import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-users-order-details-component',
  templateUrl: './users-order-details-component.component.html',
  styleUrls: ['./users-order-details-component.component.css'],
})
export class UsersOrderDetailsComponentComponent implements OnInit {
  constructor(
    public post: PostService,
    public route: ActivatedRoute,
    public location: Location
  ) {}

  id;
  orderDetails;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.post.viewOrderDetails(this.id).subscribe((response) => {
      this.orderDetails = response;
    });
  }
  back() {
    this.location.back();
  }
}
