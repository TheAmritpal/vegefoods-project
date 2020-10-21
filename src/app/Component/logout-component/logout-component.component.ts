import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/Service/post.service';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css'],
})
export class LogoutComponentComponent implements OnInit {
  constructor(public http: Router, public post: PostService) {}

  ngOnInit(): void {
    localStorage.removeItem('token');
    this.post.isLogin = false;
    this.http.navigate(['home']);
  }
}
