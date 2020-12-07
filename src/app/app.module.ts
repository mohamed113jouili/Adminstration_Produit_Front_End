import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WeatheComponent } from './weathe/weathe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { UsersComponent } from './users/users.component';
import { AllClientComponent } from './Client/all-client/all-client.component';
import { AllProductComponent } from './Product/all-product/all-product.component';
import { AllCategoryproductComponent } from './CategoryProduct/all-categoryproduct/all-categoryproduct.component';
import { EditAddCategoryproductComponent } from './CategoryProduct/edit-add-categoryproduct/edit-add-categoryproduct.component';
import { EditAddClientComponent } from './Client/edit-add-client/edit-add-client.component';
import { EditAddProductComponent } from './Product/edit-add-product/edit-add-product.component';
import { LoginComponent } from './Security/login/login.component';
import { SignupComponent } from './Security/signup/signup.component';
import { FooterComponent } from './Admin/footer/footer.component';
import { HeaderComponent } from './Admin/header/header.component';




const appRoutes: Routes =
  [
    { path: '',  redirectTo: '/login', pathMatch: 'full' },

   
   
    { path: 'login', component: LoginComponent },
     { path: 'singup', component: SignupComponent },

     {
      path: 'admin',
      component: WeatheComponent,

      children: [

        { path: '', redirectTo: 'all-client', pathMatch: 'full' },

        { path: 'all-client', component: AllClientComponent},
        { path: 'all-client/:id', component: EditAddClientComponent },
        { path: 'add-client', component: EditAddClientComponent } ,

        { path: 'all-product', component: AllProductComponent } ,
        { path: 'all-product/:id', component: EditAddProductComponent },
        { path: 'add-product', component: EditAddProductComponent} ,

        { path: 'all-product-category',component : AllCategoryproductComponent } ,
        { path: 'all-product-category/:id', component: EditAddCategoryproductComponent },
        { path: 'add-product-category', component: EditAddCategoryproductComponent } ,


        { path: '', redirectTo: 'admin', pathMatch: 'full' },

      ]
    }

  ]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    WeatheComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    AllClientComponent,
    AllProductComponent,
    AllCategoryproductComponent,
    EditAddCategoryproductComponent,
    EditAddClientComponent,
    EditAddProductComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
   
    BrowserAnimationsModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
