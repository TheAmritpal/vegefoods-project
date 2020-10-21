import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users-component.component.html',
  styleUrls: ['./users-component.component.css'],
})
export class UsersComponentComponent implements OnInit {
  constructor(public post: PostService) {}

  users;

  ngOnInit() {
    this.post.viewUser().subscribe((response) => {
      this.users = response;
    });
  }
}
