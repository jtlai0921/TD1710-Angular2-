import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetItemsComponent } from './bet-items.component';

describe('BetItemsComponent', () => {
  let component: BetItemsComponent;
  let fixture: ComponentFixture<BetItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
