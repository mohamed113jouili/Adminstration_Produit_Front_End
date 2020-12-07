import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategoryproductComponent } from './all-categoryproduct.component';

describe('AllCategoryproductComponent', () => {
  let component: AllCategoryproductComponent;
  let fixture: ComponentFixture<AllCategoryproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategoryproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategoryproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
