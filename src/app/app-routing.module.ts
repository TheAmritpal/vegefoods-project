import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponentComponent } from '../app/Component/home-component/home-component.component';
import { NavbarComponentComponent } from './Component/navbar-component/navbar-component.component';
import { DashboardComponentComponent } from './Component/Admin/dashboard-component/dashboard-component.component';
import { AddCategoryComponentComponent } from './Component/Admin/add-category-component/add-category-component.component';
import { ShopComponentComponent } from './Component/shop-component/shop-component.component';
import { ProductComponentComponent } from './Component/product-component/product-component.component';
import { AboutComponentComponent } from './Component/about-component/about-component.component';
import { BlogComponentComponent } from './Component/blog-component/blog-component.component';
import { BlogSingleComponentComponent } from './Component/blog-single-component/blog-single-component.component';
import { CartComponentComponent } from './Component/cart-component/cart-component.component';
import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { RegisterComponentComponent } from './Component/register-component/register-component.component';
import { PageNotFoundComponentComponent } from './Component/page-not-found-component/page-not-found-component.component';
import { IndexComponentComponent } from './Component/index-component/index-component.component';
import { ViewCategoryComponentComponent } from './Component/Admin/view-category-component/view-category-component.component';
import { AddProductComponentComponent } from './Component/Admin/add-product-component/add-product-component.component';
import { ViewProductComponentComponent } from './Component/Admin/view-product-component/view-product-component.component';
import { UsersComponentComponent } from './Component/Admin/users-component/users-component.component';
import { EditCategoryComponent } from './Component/Admin/edit-category/edit-category.component';
import { EditProductComponent } from './Component/Admin/edit-product/edit-product.component';
import { LogoutComponentComponent } from './Component/logout-component/logout-component.component';
import { ProductSingleComponentComponent } from './Component/product-single-component/product-single-component.component';
import { PostService } from 'src/app/Service/post.service';
import { CategoryProductsComponent } from './Component/category-products/category-products.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { UsersOrderComponentComponent } from './Component/Admin/users-order-component/users-order-component.component';
import { UsersOrderDetailsComponentComponent } from './Component/Admin/users-order-details-component/users-order-details-component.component';
import { DashComponentComponent } from './Component/Admin/dash-component/dash-component.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponentComponent,
    children: [
      { path: 'home', component: HomeComponentComponent },
      { path: 'shop', component: ShopComponentComponent },
      { path: 'product', component: ProductComponentComponent },
      { path: 'about', component: AboutComponentComponent },
      { path: 'blog', component: BlogComponentComponent },
      { path: 'blogsingle', component: BlogSingleComponentComponent },
      { path: 'cart', component: CartComponentComponent },
      { path: 'login', component: LoginComponentComponent },
      { path: 'register', component: RegisterComponentComponent },
      { path: 'logout', component: LogoutComponentComponent },
      { path: 'productsingle/:id', component: ProductSingleComponentComponent },
      { path: 'shop/category/:id', component: CategoryProductsComponent },
      { path: 'checkout', component: CheckoutComponent },
      // { path: '*', component: PageNotFoundComponentComponent },
    ],
  },
  {
    path: 'admin',
    component: DashboardComponentComponent,
    children: [
      { path: 'dashboard', component: DashComponentComponent },
      { path: 'addcategory', component: AddCategoryComponentComponent },
      { path: 'viewcategory', component: ViewCategoryComponentComponent },
      { path: 'addproduct', component: AddProductComponentComponent },
      { path: 'viewproduct', component: ViewProductComponentComponent },
      { path: 'viewcategory/:id', component: EditCategoryComponent },
      { path: 'viewproduct/:id', component: EditProductComponent },
      { path: 'users', component: UsersComponentComponent },
      { path: 'orderhistory', component: UsersOrderComponentComponent },
      {
        path: 'orderhistory/:id',
        component: UsersOrderDetailsComponentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
