import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { ModalsTestPage } from './modals-test';

/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsPage');
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalsTestPage,{'id':987,'name':'abc'});
    modal.present();
  }

}
