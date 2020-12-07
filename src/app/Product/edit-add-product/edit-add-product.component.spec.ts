import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddProductComponent } from './edit-add-product.component';

describe('EditAddProductComponent', () => {
  let component: EditAddProductComponent;
  let fixture: ComponentFixture<EditAddProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
