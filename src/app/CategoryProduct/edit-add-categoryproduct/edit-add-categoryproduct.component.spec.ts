import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddCategoryproductComponent } from './edit-add-categoryproduct.component';

describe('EditAddCategoryproductComponent', () => {
  let component: EditAddCategoryproductComponent;
  let fixture: ComponentFixture<EditAddCategoryproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddCategoryproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddCategoryproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
