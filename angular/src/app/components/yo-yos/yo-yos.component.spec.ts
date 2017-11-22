import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoYosComponent } from './yo-yos.component';

describe('YoYosComponent', () => {
  let component: YoYosComponent;
  let fixture: ComponentFixture<YoYosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoYosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoYosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
