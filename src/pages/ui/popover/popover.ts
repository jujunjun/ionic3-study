import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, ElementRef } from '@angular/core';

import { PopoverController } from 'ionic-angular';
import { PopoverTestPage } from './popover-test';
/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
  @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  // presentPopover() {
  //   let popover = this.popoverCtrl.create(PopoverTestPage);
  //   popover.present();
  // }

  presentPopover(ev) {

    let popover = this.popoverCtrl.create(PopoverTestPage, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }
  

}
