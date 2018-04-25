import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the StoragePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-storage',
  templateUrl: 'storage.html',
})
export class StoragePage {

  public driver:any;
  public testName:string;
  public testAge:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    this.driver = this.storage.driver;
    // set a key/value
    // this.storage.set('name', 'Max');
    
    let that = this;
    // Or to get a key/value pair
    this.storage.get('age').then((val) => {
      console.log('Your age is', val);
      that.testAge = val;
    });
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
      that.testName = val;
      if(!val) {
        this.storage.set('name', 'Max');
      }
    });
  }

  save(e){
    console.log(e);
    if(e.keyCode == 13){
      this.storage.set('name', this.testName);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoragePage');
  }

}
