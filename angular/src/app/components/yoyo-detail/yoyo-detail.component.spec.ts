import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoyoDetailComponent } from './yoyo-detail.component';

describe('YoyoDetailComponent', () => {
  let component: YoyoDetailComponent;
  let fixture: ComponentFixture<YoyoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoyoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoyoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
