import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTitleComponent } from './store-title.component';

describe('StoreTitleComponent', () => {
  let component: StoreTitleComponent;
  let fixture: ComponentFixture<StoreTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
