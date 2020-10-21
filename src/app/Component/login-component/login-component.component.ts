import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../Service/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public post: PostService,
    public route: Router
  ) {}
  signInForm: FormGroup;
  token;
  ngOnInit() {
    this.signInForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }
  signin(data) {
    this.post.login(data).subscribe(
      (response) => {
        this.token = response['success'].token;
        this.post.name = response['success'].name;
        this.post.userId = response['success'].id;
        localStorage.setItem('token', this.token);
        this.post.isLogin = true;
      },
      (error) => {
        alert('incorrect details');
      },
      () => {
        this.post.checkLogin();
        this.route.navigate(['/home']);
      }
    );
  }
}
