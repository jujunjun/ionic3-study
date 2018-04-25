import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverTestPage } from './popover-test';

@NgModule({
  declarations: [
    PopoverTestPage,
  ],
  imports: [
    IonicPageModule.forChild(PopoverTestPage),
  ],
})
export class PopoverTestPageModule {}
