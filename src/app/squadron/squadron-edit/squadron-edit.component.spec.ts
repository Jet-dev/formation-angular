import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadronEditComponent } from './squadron-edit.component';

describe('SquadronEditComponent', () => {
  let component: SquadronEditComponent;
  let fixture: ComponentFixture<SquadronEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadronEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadronEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
