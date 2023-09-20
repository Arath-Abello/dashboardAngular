import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearIdentidadesComponent } from './crear-identidades.component';

describe('CrearIdentidadesComponent', () => {
  let component: CrearIdentidadesComponent;
  let fixture: ComponentFixture<CrearIdentidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearIdentidadesComponent]
    });
    fixture = TestBed.createComponent(CrearIdentidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
