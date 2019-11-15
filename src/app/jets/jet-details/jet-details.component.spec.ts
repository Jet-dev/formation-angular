import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetDetailsComponent } from './jet-details.component';

describe('JetDetailsComponent', () => {
  let component: JetDetailsComponent;
  let fixture: ComponentFixture<JetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
