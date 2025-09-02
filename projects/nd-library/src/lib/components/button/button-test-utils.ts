// Grab Button Text
import {By} from '@angular/platform-browser';
import {ComponentFixture} from '@angular/core/testing';

export function getButtonLabel(element: HTMLElement) {
  return element.querySelector('.label')?.textContent?.trim() ?? '';
}

export function hasLeftIcon(element: HTMLElement) {
  return !!element.querySelector('.icon-left')?.children.length;
}

export function hasRightIcon(element: HTMLElement) {
  return !!element.querySelector('.icon-right')?.children.length;
}

export function getClasses(element: HTMLElement) {
  return Array.from(element.classList);
}

export function hasClass(element: HTMLElement, className: string) {
  console.log(element.classList);
  return Array.from(element.classList).some(c => c.includes(className));
}


export function getButtonSpec(element: ComponentFixture<any>) {
  console.log(element);
  return element.debugElement.query(By.css('button')).nativeElement;
}
