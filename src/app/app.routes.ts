import { Routes } from '@angular/router';
import { HomeComponent } from './composants/home/home.component';
import { AboutComponent } from './composants/about/about.component';
import { ContactComponent } from './composants/contact/contact.component';
import { UserDetailComponent } from './composants/user-detail/user-detail.component';
import { UserListComponent } from './composants/user-list/user-list.component';
import { ProductListComponent } from './composants/product-list/product-list.component';
import { PostListComponent } from './composants/post-list/post-list.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'http', component: PostListComponent },
    { path: 'users', component: UserListComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'user/:id', component: UserDetailComponent }

];
