import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../Service/post.service';

@Component({
  selector: 'app-add-category-component',
  templateUrl: './add-category-component.component.html',
  styleUrls: ['./add-category-component.component.css'],
})
export class AddCategoryComponentComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public eleRef: ElementRef,
    public post: PostService
  ) {}

  addCategory: FormGroup;
  imgchg;
  alert: boolean = false;

  ngOnInit() {
    this.addCategory = this.fb.group({
      categoryname: [null, Validators.required],
      image: [null, Validators.required],
    });
  }
  img(event) {
    this.imgchg = event.target.files[0];
  }
  category() {
    const fd = new FormData();
    fd.append('categoryname', this.addCategory.get('categoryname').value);
    fd.append('image', this.imgchg, this.imgchg.name);
    this.post.addCate(fd).subscribe(
      (res) => {
        this.alert = true;
        this.addCategory.reset();
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('complete');
      }
    );
    this.imgchg = null;
  }
  close() {
    this.alert = false;
  }
}
