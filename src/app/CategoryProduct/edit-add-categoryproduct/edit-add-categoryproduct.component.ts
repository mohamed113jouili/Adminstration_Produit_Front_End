import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryProduct } from '@app/Models/categoryProduct';
import { CategoryproductService } from '@app/Services/categoryproduct.service';

@Component({
  selector: 'app-edit-add-categoryproduct',
  templateUrl: './edit-add-categoryproduct.component.html',
  styleUrls: ['./edit-add-categoryproduct.component.css']
})
export class EditAddCategoryproductComponent implements OnInit {
  name: string;
  description: string;
  catForm: FormGroup;


  constructor(private router: Router, private formBuilder: FormBuilder,
    public categoryproductService: CategoryproductService, public arouter: ActivatedRoute) { }

  ngOnInit(): void {

    this.initCatForm();
    this.initEditCategoryProduct();
  }



  addOReditCategoryProduct() {

    if (this.formControls.name.valid && this.formControls.description.valid) {
      this.categoryproductService.subjectIsUpdate.value == true ?
        this.updateCategoryProductt(this.categoryproductService.subjectCurrentEditId.value) :
        this.addCategoryProductt()
    }

  }




  get formControls() {

    return this.catForm.controls;
  }

  initCatForm() {
    this.catForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]

    });
  }

  initEditCategoryProduct() {
    this.arouter.paramMap.subscribe(params => {

      if (params.get('id') !== null) {
        {
          this.categoryproductService.initEditCategoryProduct(Number(params.get('id')));
          this.categoryproductService.subjecttitleButton.next("Update Category Product");
          this.categoryproductService.subjectIsUpdate.next(true);
          this.categoryproductService.subjectCurrentEditId.next(Number(params.get('id')));
        }

      }
      else {
        {
          this.categoryproductService.subjectCategoryProduct.value.name = ""
          this.categoryproductService.subjectCategoryProduct.value.description = ""
          this.categoryproductService.subjecttitleButton.next("Add Category Product");
          this.categoryproductService.subjectIsUpdate.next(false);
        }

      }

    });
  }

  navigatetoAllCategoryProduct() {
    this.router.navigateByUrl("/admin/all-product-category")
  }


  addCategoryProductt() {
    this.categoryproductService.saveCategoryProduct(this.catForm.value).toPromise().then(

      rep => {

        this.navigatetoAllCategoryProduct()
      },
      error => {
        // console.log(error)
      }

    )

  }

  updateCategoryProductt(id: number) {
    console.log(this.catForm.value)
    this.categoryproductService.updateCategoryProduct(id, this.catForm.value).toPromise().then(

      rep => {

        this.navigatetoAllCategoryProduct()
      },
      error => {
        // console.log(error)
      }

    )

  }



}
