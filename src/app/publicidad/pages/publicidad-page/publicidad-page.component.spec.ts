import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadPageComponent } from './publicidad-page.component';

describe('PublicidadPageComponent', () => {
  let component: PublicidadPageComponent;
  let fixture: ComponentFixture<PublicidadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicidadPageComponent]
    });
    fixture = TestBed.createComponent(PublicidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
