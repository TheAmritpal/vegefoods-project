import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './Component/navbar-component/navbar-component.component';
import { HomeComponentComponent } from './Component/home-component/home-component.component';
import { ShopComponentComponent } from './Component/shop-component/shop-component.component';
import { ProductComponentComponent } from './Component/product-component/product-component.component';
import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { RegisterComponentComponent } from './Component/register-component/register-component.component';
import { DashboardComponentComponent } from './Component/Admin/dashboard-component/dashboard-component.component';
import { AddCategoryComponentComponent } from './Component/Admin/add-category-component/add-category-component.component';
import { FooterComponentComponent } from './Component/footer-component/footer-component.component';
import { AboutComponentComponent } from './Component/about-component/about-component.component';
import { BlogComponentComponent } from './Component/blog-component/blog-component.component';
import { BlogSingleComponentComponent } from './Component/blog-single-component/blog-single-component.component';
import { CartComponentComponent } from './Component/cart-component/cart-component.component';
import { PageNotFoundComponentComponent } from './Component/page-not-found-component/page-not-found-component.component';
import { IndexComponentComponent } from './Component/index-component/index-component.component';
import { ViewCategoryComponentComponent } from './Component/Admin/view-category-component/view-category-component.component';
import { AddProductComponentComponent } from './Component/Admin/add-product-component/add-product-component.component';
import { ViewProductComponentComponent } from './Component/Admin/view-product-component/view-product-component.component';
import { UsersComponentComponent } from './Component/Admin/users-component/users-component.component';
import { UsersOrderComponentComponent } from './Component/Admin/users-order-component/users-order-component.component';
import { EditProductComponent } from './Component/Admin/edit-product/edit-product.component';
import { EditCategoryComponent } from './Component/Admin/edit-category/edit-category.component';
import { LogoutComponentComponent } from './Component/logout-component/logout-component.component';
import { ProductSingleComponentComponent } from './Component/product-single-component/product-single-component.component';
import { CategoryProductsComponent } from './Component/category-products/category-products.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { UsersOrderDetailsComponentComponent } from './Component/Admin/users-order-details-component/users-order-details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    HomeComponentComponent,
    ShopComponentComponent,
    ProductComponentComponent,
    LoginComponentComponent,
    RegisterComponentComponent,
    DashboardComponentComponent,
    AddCategoryComponentComponent,
    FooterComponentComponent,
    AboutComponentComponent,
    BlogComponentComponent,
    BlogSingleComponentComponent,
    CartComponentComponent,
    PageNotFoundComponentComponent,
    IndexComponentComponent,
    ViewCategoryComponentComponent,
    AddProductComponentComponent,
    ViewProductComponentComponent,
    UsersComponentComponent,
    UsersOrderComponentComponent,
    EditProductComponent,
    EditCategoryComponent,
    LogoutComponentComponent,
    ProductSingleComponentComponent,
    CategoryProductsComponent,
    CheckoutComponent,
    UsersOrderDetailsComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
