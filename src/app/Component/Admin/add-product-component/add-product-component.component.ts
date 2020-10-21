import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../Service/post.service';
import { HttpClient } from '@angular/common/http';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.css'],
})
export class AddProductComponentComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public ele: ElementRef,
    public post: PostService,
    public http: HttpClient
  ) {}

  addProduct: FormGroup;
  category;
  img;
  alert: boolean = false;

  ngOnInit() {
    this.addProduct = this.fb.group({
      product: [null, Validators.required],
      price: [null, Validators.required],
      categoryid: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required],
    });
    this.post.viewCate().subscribe((res) => {
      this.category = res;
    });
  }
  imageChange(event) {
    this.img = event.target.files[0];
  }
  product() {
    const fd = new FormData();
    fd.append('product', this.addProduct.get('product').value);
    fd.append('price', this.addProduct.get('price').value);
    fd.append('categoryid', this.addProduct.get('categoryid').value);
    fd.append('description', this.addProduct.get('description').value);
    fd.append('image', this.img, this.img.name);
    this.post.addProd(fd).subscribe(
      (response) => {
        this.alert = true;
        this.addProduct.reset();
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete');
      }
    );
  }
  close() {
    this.alert = false;
  }
}
