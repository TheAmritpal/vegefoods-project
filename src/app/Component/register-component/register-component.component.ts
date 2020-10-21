import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../Service/post.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
})
export class RegisterComponentComponent implements OnInit {
  constructor(public fb: FormBuilder, public post: PostService) {}
  registrationForm: FormGroup;
  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      c_password: [null, Validators.required],
      isAdmin: [null, Validators.required],
    });
  }
  register(data) {
    this.post.reg(data).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
