import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTreeComponent } from './details-tree.component';

describe('DetailsTreeComponent', () => {
  let component: DetailsTreeComponent;
  let fixture: ComponentFixture<DetailsTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
