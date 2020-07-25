import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EformComponent } from './eform.component';

describe('EformComponent', () => {
  let component: EformComponent;
  let fixture: ComponentFixture<EformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
