import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { PostService } from '../../Service/post.service';

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css'],
})
export class NavbarComponentComponent implements OnInit {
  constructor(public post: PostService) {}

  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faPhone = faPhone;
  faPaperPlane = faPaperPlane;
  cartlength = 0;
  show = false;

  ngOnInit(): void {
    if (sessionStorage.getItem('cart')) {
      var arrFromSession = JSON.parse(sessionStorage.getItem('cart'));
      this.cartlength = arrFromSession.length;
    }
    if (this.cartlength > 0) {
      this.show = true;
    }
  }
}
