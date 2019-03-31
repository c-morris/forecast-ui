import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDescriptionsComponent } from './policy-descriptions.component';

describe('PolicyDescriptionsComponent', () => {
  let component: PolicyDescriptionsComponent;
  let fixture: ComponentFixture<PolicyDescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyDescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
