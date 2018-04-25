import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  public items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i = 0; i < 5; i++){
      this.items.push(`第${i}条数据`);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  itemSelected(item){
    alert(item);
  }

}
