import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardelete } from './cardelete';

describe('Cardelete', () => {
  let component: Cardelete;
  let fixture: ComponentFixture<Cardelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
