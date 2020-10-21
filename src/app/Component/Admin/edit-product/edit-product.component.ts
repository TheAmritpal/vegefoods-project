import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../Service/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  constructor(
    public post: PostService,
    public fb: FormBuilder,
    public actroute: ActivatedRoute
  ) {}

  editProduct: FormGroup;
  img;
  category;
  id;
  gotProd;

  ngOnInit(): void {
    this.id = this.actroute.snapshot.params.id;
    this.post.getProd(this.id).subscribe(
      (response) => {
        this.gotProd = response;
        this.editProduct.patchValue({
          product: this.gotProd[0].product,
          price: this.gotProd[0].price,
          categoryid: this.gotProd[0].categoryid,
          description: this.gotProd[0].description,
        });
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
    this.post.viewCate().subscribe(
      (response) => {
        this.category = response;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Complete');
      }
    );
    this.editProduct = this.fb.group({
      product: [null, Validators.required],
      price: [null, Validators.required],
      categoryid: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required],
    });
  }
  imageChange(event) {
    this.img = event.target.files[0];
  }
  edit() {
    const fd = new FormData();
    fd.append('product', this.editProduct.get('product').value);
    fd.append('price', this.editProduct.get('price').value);
    fd.append('categoryid', this.editProduct.get('categoryid').value);
    fd.append('description', this.editProduct.get('description').value);
    fd.append('image', this.img, this.img.name);
    this.post.editProd(fd, this.id);
    this.editProduct.reset();
  }
}
