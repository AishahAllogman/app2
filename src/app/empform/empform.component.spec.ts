import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPformComponent } from './empform.component';

describe('EMPformComponent', () => {
  let component: EMPformComponent;
  let fixture: ComponentFixture<EMPformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMPformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMPformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
