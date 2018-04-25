import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class SearchbarPage {
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Box',
      'Alphal',
      'Zip',
      'Map',
      'Java'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchbarPage');
  }

}
