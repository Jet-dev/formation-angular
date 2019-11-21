import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetEditComponent } from './jet-edit.component';

describe('JetEditComponent', () => {
  let component: JetEditComponent;
  let fixture: ComponentFixture<JetEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
