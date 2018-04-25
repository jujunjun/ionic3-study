import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActionSheetsPage } from '../ui/action-sheets/action-sheets';
import { AlterPage } from '../ui/alter/alter';
import { BadgesPage } from '../ui/badges/badges';
import { ButtonsPage } from '../ui/buttons/buttons';
import { CardsPage } from '../ui/cards/cards';
import { GridPage } from '../ui/grid/grid';
import { InputsPage } from '../ui/inputs/inputs';
import { ListsPage } from '../ui/lists/lists';
import { IconsPage } from '../ui/icons/icons';
import { LoadingPage } from '../ui/loading/loading';
import { MenusPage } from '../ui/menus/menus';
import { ModalsPage } from '../ui/modals/modals';
import { PopoverPage } from '../ui/popover/popover';
import { SearchbarPage } from '../ui/searchbar/searchbar';
import { SegmentPage } from '../ui/segment/segment';
import { SlidesPage } from '../ui/slides/slides';
import { ToastPage } from '../ui/toast/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public list = [];

  constructor(public navCtrl: NavController) {
    this.list.push({'name':'ActionSheet', 'page':ActionSheetsPage});
    this.list.push({'name':'Alter', 'page':AlterPage});
    this.list.push({'name':'Badge', 'page':BadgesPage});
    this.list.push({'name':'Button', 'page':ButtonsPage});
    this.list.push({'name':'Card', 'page':CardsPage});
    this.list.push({'name':'Grid', 'page':GridPage});
    this.list.push({'name':'Input', 'page':InputsPage});
    this.list.push({'name':'List', 'page':ListsPage});
    this.list.push({'name':'Icon', 'page':IconsPage});
    this.list.push({'name':'Loading', 'page':LoadingPage});
    this.list.push({'name':'Menu', 'page':MenusPage});
    this.list.push({'name':'Modal', 'page':ModalsPage});
    this.list.push({'name':'Popover', 'page':PopoverPage});
    this.list.push({'name':'Searchbar', 'page':SearchbarPage});
    this.list.push({'name':'Segment', 'page':SegmentPage});
    this.list.push({'name':'Slide', 'page':SlidesPage});
    this.list.push({'name':'Toast', 'page':ToastPage});
  }
  
  ionViewDidLoad(){  
        console.log("1.0 ionViewDidLoad 当页面加载的时候触发，仅在页面创建的时候触发一次，如果被缓存了，那么下次再打开这个页面则不会触发");  
    }  
    ionViewWillEnter(){  
        console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");  
    }  
    ionViewDidEnter(){  
        console.log("3.0 ionViewDidEnter 当进入页面时触发");  
    }  
    ionViewWillLeave(){  
        console.log("4.0 ionViewWillLeave 当将要从页面离开时触发");  
    }  
    ionViewDidLeave(){  
        console.log("5.0 ionViewDidLeave 离开页面时触发");  
    }  
    ionViewWillUnload(){  
        console.log("6.0 ionViewWillUnload 当页面将要销毁同时页面上元素移除时触发");  
    }  
  
    ionViewCanEnter(){  
        console.log("ionViewCanEnter");  
    }  
  
    ionViewCanLeave(){  
        console.log("ionViewCanLeave");  
    }  

}
