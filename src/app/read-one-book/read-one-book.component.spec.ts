import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOneBookComponent } from './read-one-book.component';

describe('ReadOneBookComponent', () => {
  let component: ReadOneBookComponent;
  let fixture: ComponentFixture<ReadOneBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOneBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
