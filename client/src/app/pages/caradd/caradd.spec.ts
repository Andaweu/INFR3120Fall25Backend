import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caradd } from './caradd';

describe('Caradd', () => {
  let component: Caradd;
  let fixture: ComponentFixture<Caradd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Caradd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caradd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
