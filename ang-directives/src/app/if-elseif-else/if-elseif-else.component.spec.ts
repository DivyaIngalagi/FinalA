import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseifElseComponent } from './if-elseif-else.component';

describe('IfElseifElseComponent', () => {
  let component: IfElseifElseComponent;
  let fixture: ComponentFixture<IfElseifElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfElseifElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfElseifElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
