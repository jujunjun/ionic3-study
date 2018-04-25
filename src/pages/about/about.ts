import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StoragePage } from '../storage/storage';
import { InfiniteScrollPage } from '../component/infinite-scroll/infinite-scroll';
import { RefresherPage } from '../component/refresher/refresher';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public list = [];

  constructor(public navCtrl: NavController) {
    this.list.push({'name':'Storage', 'page':StoragePage});
    this.list.push({'name':'InfiniteScroll-上拉加载更多', 'page':InfiniteScrollPage});
    this.list.push({'name':'Refresher-下来刷新', 'page':RefresherPage});
  }


}
