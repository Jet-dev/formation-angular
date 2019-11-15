import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetsComponent } from './jets.component';

describe('JetsComponent', () => {
  let component: JetsComponent;
  let fixture: ComponentFixture<JetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
