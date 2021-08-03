import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from "@ngrx/store/testing"
import { EffectComponent } from './effect.component';

describe('EffectComponent', () => {

  let component: EffectComponent;
  let fixture: ComponentFixture<EffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EffectComponent],
      providers: [
        provideMockStore({})
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
