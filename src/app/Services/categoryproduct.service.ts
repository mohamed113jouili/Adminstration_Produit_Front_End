import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryProduct } from '@app/Models/categoryProduct';
import { environment } from '@environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryproductService {

  private _listSubjectCategoryProduct = new BehaviorSubject<CategoryProduct[]>([]);
  private _subjectCategoryProduct = new BehaviorSubject<CategoryProduct>({});
  private _subjecttitleButton = new BehaviorSubject<String>("");
  private _subjectIsUpdate = new BehaviorSubject<boolean>(false);
  private _subjectCurrentEditId = new BehaviorSubject<number>(0);
  




  constructor(public http: HttpClient) { }

  //get all CategoryProduct
  getAllCategoryProduct() {

    return this.http.get<CategoryProduct[]>(`${environment.apiUrl}/all_category_product`)
      .pipe(map(resp => resp));

  }

  // get CategoryProduct by id 
  getCategoryProductByid(id: number) {

    return this.http.get(`${environment.apiUrl}/category_product/` + id)
      .pipe(map(resp => resp as CategoryProduct));

  }

  // save CategoryProduct 
  saveCategoryProduct(categoryProduct: CategoryProduct) {


    return this.http.post(`${environment.apiUrl}/save/category_product`, categoryProduct)
      .pipe(map(resp => resp as CategoryProduct));

  }

  // update CategoryProduct
  updateCategoryProduct(id: number, categoryProduct: CategoryProduct) {

    return this.http.put(`${environment.apiUrl}/update/category_product/` + id, categoryProduct)
      .pipe(map(resp => resp as CategoryProduct));

  }

  // delete CategoryProduct by id 
  deleteCategoryProductByid(id: number) {
    return this.http.delete(`${environment.apiUrl}/delete/category_product/` + id)
      .pipe(map(resp => resp as boolean));

  }



  //init in Component CategoryProduct
  initCategoryProduct() {

    this.getAllCategoryProduct().toPromise().then(

      rep => {
        console.log(rep)
        this.listSubjectCategoryProduct.next(rep)
      },
      error => {
        console.log(error)
      }

    )
  }


  //init in Component EditAddCategoryproductComponent
  initEditCategoryProduct(id: number) {

    this.getCategoryProductByid(id).toPromise().then(

      rep => {
        console.log(rep)

        this.subjectCategoryProduct.next(rep)


      },
      error => {
        console.log(error)
      }

    )
  }


  // delete in Component CategoryProduct
  deleteCategoryProduct(id: number) {

    this.deleteCategoryProductByid(id).toPromise().then(

      rep => {
        // filter list CategoryProduct by id deleted
        this.listSubjectCategoryProduct.next(this.listSubjectCategoryProduct.value.filter(function (el) {
          return el.id != id;;
        }))
      },
      error => {
        //console.log(error)
      }
    )
  }



  /** access method getter */
  public get listSubjectCategoryProduct() {
    return this._listSubjectCategoryProduct;
  }

  public get subjectCategoryProduct() {
    return this._subjectCategoryProduct;
  }
  public get subjecttitleButton() {
    return this._subjecttitleButton;
  }

  public get subjectIsUpdate() {
    return this._subjectIsUpdate;
  }

  public get subjectCurrentEditId() {
    return this._subjectCurrentEditId;
  }
 





}
