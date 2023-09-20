import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidoMainPageComponent } from './bienvenido-main-page.component';

describe('BienvenidoMainPageComponent', () => {
  let component: BienvenidoMainPageComponent;
  let fixture: ComponentFixture<BienvenidoMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienvenidoMainPageComponent]
    });
    fixture = TestBed.createComponent(BienvenidoMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
