import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetItemComponent } from './jet-item.component';

describe('JetItemComponent', () => {
  let component: JetItemComponent;
  let fixture: ComponentFixture<JetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
