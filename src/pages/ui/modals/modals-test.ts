import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the ModalsTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modals-test',
  templateUrl: 'modals-test.html',
})
export class ModalsTestPage {

  public name:any;
  public id:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(this.navParams.get('id'));
    this.name = this.navParams.get('name')
    this.id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsTestPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
