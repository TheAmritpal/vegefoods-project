import { Component, OnInit, ElementRef } from '@angular/core';
import { PostService } from 'src/app/Service/post.service';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css'],
})
export class CartComponentComponent implements OnInit {
  constructor(
    public post: PostService,
    public el: ElementRef,
    public router: Router
  ) {}

  carts;
  final: any = [];
  cartPrice;
  faMinusCircle = faMinusCircle;
  cartempty: boolean = false;
  quantity = [];
  total;

  ngOnInit(): void {
    if (!sessionStorage.getItem('cart')) {
      this.cartempty = true;
    } else {
      this.cartempty = false;
    }
    const car = JSON.parse(sessionStorage.getItem('cart'));
    this.post.getCart(car).subscribe(
      (response) => {
        this.carts = response;
        this.final = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  remCart(id) {
    const index: number = this.post.cart.indexOf(id);
    if (index !== -1) {
      this.post.cart.splice(index, 1);
    }
    sessionStorage.setItem('cart', JSON.stringify(this.post.cart));
    this.ngOnInit();
  }
  empty() {
    sessionStorage.removeItem('cart');
    this.post.cart = [];
    this.ngOnInit();
  }
  quantityChange(event) {
    let quantity = event.target.value;
    this.quantity.push(quantity);
    let price = event.path[1].previousSibling.firstElementChild.innerHTML;
    // let total = event.path[1].nextSibling.innerHTML;
    let total = quantity * price;
    event.path[1].nextSibling.firstElementChild.innerHTML = total;
    var final = this.el.nativeElement.querySelectorAll('.tott');
    var inall = '';
    for (let index = 0; index < final.length; index++) {
      inall += final[index].innerHTML + ',';
    }
    var spl = inall.split(',');
    var sli = spl.slice(0, -1);
    var result = sli.map(function (x) {
      return parseInt(x, 10);
    });
    var sum = result.reduce(function (a, b) {
      return a + b;
    }, 0);
    this.total = sum;
    this.el.nativeElement.querySelector('.grndTot').innerHTML = '$' + sum;
  }
  checkout() {
    // if (this.post.isLogin == true) {
    let next = this.carts.map((x, index) => {
      return {
        id: x.id,
        product: x.product,
        price: x.price,
        quantity: this.quantity[index],
        total: this.total,
      };
    });
    sessionStorage.setItem('checkout', JSON.stringify(next));
    this.router.navigate(['checkout']);
    // } else {
    //   var con = confirm('you need to login first');
    //   if (con == true) {
    //     this.router.navigate(['login']);
    //   }
    // }
  }
}
