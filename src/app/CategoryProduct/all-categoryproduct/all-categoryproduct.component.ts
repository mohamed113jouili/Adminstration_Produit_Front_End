import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryproductService } from '@app/Services/categoryproduct.service';

@Component({
  selector: 'app-all-categoryproduct',
  templateUrl: './all-categoryproduct.component.html',
  styleUrls: ['./all-categoryproduct.component.css']
})
export class AllCategoryproductComponent implements OnInit {

  users = null;/*this.sau.getcurrentUsers()*/
  page = 1;
  pageSize = 4;
  collectionSize: number = 22;
  constructor(private router: Router,
    public categoryproductService: CategoryproductService) { }

  ngOnInit(): void {
    this.refreshCountries();
    this.categoryproductService.initCategoryProduct();
  }
  navigatetoEditClient() {
    this.router.navigateByUrl("/managefootball/players/1")
  }

  navigatetoAddClient() {
    this.router.navigateByUrl("/admin/add-product-category")
  }


  deleteCategoryProduct() {

  }

  refreshCountries() {
    /* this.users
       .map((user, i) => ({ id: i + 1, ...user }))
       .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);*/
  }

}
