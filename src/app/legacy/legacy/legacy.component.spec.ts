import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { LegacyComponent } from './legacy.component';

describe('LegacyComponent', () => {
  let component: LegacyComponent;
  let fixture: ComponentFixture<LegacyComponent>;

  const initialState = {
    legacy: {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LegacyComponent],
      providers: [
        provideMockStore({
          initialState
        })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
