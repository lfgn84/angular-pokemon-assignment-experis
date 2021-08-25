import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPokemonCardComponent } from './trainer-pokemon-card.component';

describe('TrainerPokemonCardComponent', () => {
  let component: TrainerPokemonCardComponent;
  let fixture: ComponentFixture<TrainerPokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerPokemonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerPokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
