import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../../Service/post.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public post: PostService
  ) {}

  editCategory: FormGroup;
  imgchg;
  id;
  gotcate;

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.post.getCate(this.id).subscribe(
      (response) => {
        this.gotcate = response[0].categoryname;
        this.editCategory.patchValue({
          categoryname: this.gotcate,
        });
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete');
      }
    );
    this.editCategory = this.fb.group({
      categoryname: [null, Validators.required],
      image: [null, Validators.required],
    });
  }
  img(event) {
    this.imgchg = event.target.files[0];
  }
  editCate() {
    const fd = new FormData();
    fd.append('categoryname', this.editCategory.get('categoryname').value);
    fd.append('image', this.imgchg, this.imgchg.name);
    this.post.editCate(fd, this.id);
  }
}
