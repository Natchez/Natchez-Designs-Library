import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdLibrary } from './nd-library';

describe('NdLibrary', () => {
  let component: NdLibrary;
  let fixture: ComponentFixture<NdLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NdLibrary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdLibrary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
