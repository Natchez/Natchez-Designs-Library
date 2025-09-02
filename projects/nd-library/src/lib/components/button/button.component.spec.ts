import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonComponent} from './button.component';
import {
  getButtonLabel, getButtonSpec, hasClass,
  hasLeftIcon,
  hasRightIcon
} from './button-test-utils';
import {EventEmitter} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
      imports: [],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render correct label', () => {
    component.label = 'Button';
    fixture.detectChanges();
    expect(getButtonLabel(fixture.nativeElement)).toEqual('Button');
  });


  it('should not fire emitter when disabled', () => {
    component.disabled = true;

    let fired = false;
    component.clicked.subscribe(() => fired = true);
    const btn = getButtonSpec(fixture);

    btn.click();
    expect(fired).toBe(false);

  });
  it('should fire emitter when clicked', () => {
    component.disabled = false;

    let fired = false;
    component.clicked.subscribe(() => fired = true);
    const btn = getButtonSpec(fixture);
    btn.click();
    expect(fired).toBe(true);
  })

  it('should render icon on the left', () => {
    component.style = "outline"
    fixture.detectChanges();
    expect(hasClass(getButtonSpec(fixture), 'icon-right')).toBe(true);
  })

  it('should render icon on the right', () => {
    component.style = "outline"
    fixture.detectChanges();
    expect(hasClass(getButtonSpec(fixture), 'icon-right')).toBe(true);
  })
  it('should render style outlined', () => {
    component.style = "outline"
    fixture.detectChanges();
    expect(hasClass(getButtonSpec(fixture), 'nd-button--outline')).toBe(true);
  })
  it('should render style solid', () => {
    component.style = "solid"
    fixture.detectChanges();
    expect(hasClass(getButtonSpec(fixture), 'nd-button--solid')).toBe(true);
  })
  it('should render style text only', () => {
    component.style = "text"
    fixture.detectChanges();
    expect(hasClass(getButtonSpec(fixture), 'nd-button--text')).toBe(true);
  })
  it('should render size large', () => {
    component.size = "large"
    fixture.detectChanges();
    expect(hasClass(getButtonSpec(fixture), 'nd-button--large')).toBe(true);
  })
  it('should render size medium', () => {
    component.size = "medium"
    fixture.detectChanges();
    expect(hasClass(getButtonSpec(fixture), 'nd-button--medium')).toBe(true);
  })
  it('should render size small', () => {
    component.size = "small"
    fixture.detectChanges();
    expect(hasClass(getButtonSpec(fixture), 'nd-button--small')).toBe(true);
  })
});
