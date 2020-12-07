import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/Models/user';
import { AuthService } from '@app/Services/auth.service';
import { ProductService } from '@app/Services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {

  users = null;


  page = 1;
  pageSize = 4;
  collectionSize =12 /*this.users.length;*/
  constructor( private router: Router,public productService:ProductService) { }

  ngOnInit(): void {
    this.refreshCountries();
    this.productService.initProduct();

  }
  navigatetoEditClient() {
    this.router.navigateByUrl("/managefootball/players/1")
  }

  navigatetoAddProduct() {
    this.router.navigateByUrl("/admin/add-product")
  }
 



  refreshCountries() {
    /*this.sau.cu.value
      .map((user, i) => ({ id: i + 1, ...user }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);*/
  }


}
