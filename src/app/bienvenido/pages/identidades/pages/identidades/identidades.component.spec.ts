import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadesComponent } from './identidades.component';

describe('IdentidadesComponent', () => {
  let component: IdentidadesComponent;
  let fixture: ComponentFixture<IdentidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdentidadesComponent]
    });
    fixture = TestBed.createComponent(IdentidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
