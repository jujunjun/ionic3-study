import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RefresherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-refresher',
  templateUrl: 'refresher.html',
})
export class RefresherPage {

  items = [];
  j = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 10; i++) {
      this.items.unshift( `第${this.j}条数据` );
      this.j++;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RefresherPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.items.unshift( `第${this.j}条数据` );
        this.j++;
      }

      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }
}
