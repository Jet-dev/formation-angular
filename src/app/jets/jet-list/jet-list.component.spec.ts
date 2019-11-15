import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JetListComponent } from './jet-list.component';

describe('JetListComponent', () => {
  let component: JetListComponent;
  let fixture: ComponentFixture<JetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
