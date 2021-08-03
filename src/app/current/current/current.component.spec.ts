import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { currentFeatureKey } from '../store/current.reducer';

import { CurrentComponent } from './current.component';

describe('CurrentComponent', () => {
  let component: CurrentComponent;
  let fixture: ComponentFixture<CurrentComponent>;

  const initialState = {
    [currentFeatureKey]: {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentComponent],
      providers: [
        provideMockStore({
          initialState
        })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
