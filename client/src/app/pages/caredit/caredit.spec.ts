import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caredit } from './caredit';

describe('Caredit', () => {
  let component: Caredit;
  let fixture: ComponentFixture<Caredit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caredit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caredit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
