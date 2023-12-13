import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesListComponent } from './recipies-list.component';

describe('RecipiesListComponent', () => {
  let component: RecipiesListComponent;
  let fixture: ComponentFixture<RecipiesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipiesListComponent]
    });
    fixture = TestBed.createComponent(RecipiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
