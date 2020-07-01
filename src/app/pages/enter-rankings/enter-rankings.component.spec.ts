import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRankingsComponent } from './enter-rankings.component';

describe('EnterRankingsComponent', () => {
  let component: EnterRankingsComponent;
  let fixture: ComponentFixture<EnterRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
