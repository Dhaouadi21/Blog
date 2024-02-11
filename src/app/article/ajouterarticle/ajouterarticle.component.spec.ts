import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterarticleComponent } from './ajouterarticle.component';

describe('AjouterarticleComponent', () => {
  let component: AjouterarticleComponent;
  let fixture: ComponentFixture<AjouterarticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterarticleComponent]
    });
    fixture = TestBed.createComponent(AjouterarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
