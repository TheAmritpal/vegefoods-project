import { Component, OnInit } from '@angular/core';
import {
  faSortUp,
  faMapMarker,
  faPhone,
  faEnvelope,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css'],
})
export class FooterComponentComponent implements OnInit {
  constructor() {}

  faSortUp = faSortUp;
  faMapMarker = faMapMarker;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faHeart = faHeart;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  ngOnInit(): void {}
}
