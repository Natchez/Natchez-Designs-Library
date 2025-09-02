import { NgModule } from '@angular/core';
import { NdLibrary } from './nd-library';
import {
  ButtonComponent
} from './components/button/button.component';
import {NgClass} from '@angular/common';
import { CheckboxComponent } from './components/checkbox.component/checkbox.component';
import { RadioComponent } from './components/radio.component/radio.component';
import { IconButtonComponent } from './components/icon-button.component/icon-button.component';
import { SwitchComponent } from './components/switch.component/switch.component';



@NgModule({
  declarations: [
    NdLibrary,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    IconButtonComponent,
    SwitchComponent
  ],
  imports: [
    NgClass
  ],
  exports: [
    NdLibrary,
    ButtonComponent
  ]
})
export class NdLibraryModule { }
