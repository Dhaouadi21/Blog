import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierarticleComponent } from './modifierarticle.component';

describe('ModifierarticleComponent', () => {
  let component: ModifierarticleComponent;
  let fixture: ComponentFixture<ModifierarticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierarticleComponent]
    });
    fixture = TestBed.createComponent(ModifierarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
