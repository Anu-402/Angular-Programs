import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetraineeComponent } from './deletetrainee.component';

describe('DeletetraineeComponent', () => {
  let component: DeletetraineeComponent;
  let fixture: ComponentFixture<DeletetraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
