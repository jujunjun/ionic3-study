import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FileUploadModule } from 'ng2-file-upload';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { ActionSheetsPage } from '../pages/ui/action-sheets/action-sheets';
import { AlterPage } from '../pages/ui/alter/alter';
import { BadgesPage } from '../pages/ui/badges/badges';
import { ButtonsPage } from '../pages/ui/buttons/buttons';
import { CardsPage } from '../pages/ui/cards/cards';
import { GridPage } from '../pages/ui/grid/grid';
import { InputsPage } from '../pages/ui/inputs/inputs';
import { ListsPage } from '../pages/ui/lists/lists';
import { IconsPage } from '../pages/ui/icons/icons';
import { LoadingPage } from '../pages/ui/loading/loading';
import { MenusPage } from '../pages/ui/menus/menus';
import { ModalsPage } from '../pages/ui/modals/modals';
import { ModalsTestPage } from '../pages/ui/modals/modals-test';
import { PopoverPage } from '../pages/ui/popover/popover';
import { PopoverTestPage } from '../pages/ui/popover/popover-test';
import { SearchbarPage } from '../pages/ui/searchbar/searchbar';
import { SegmentPage } from '../pages/ui/segment/segment';
import { SlidesPage } from '../pages/ui/slides/slides';
import { ToastPage } from '../pages/ui/toast/toast';
import { StoragePage } from '../pages/storage/storage';
import { InfiniteScrollPage } from '../pages/component/infinite-scroll/infinite-scroll';
import { RefresherPage } from '../pages/component/refresher/refresher';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { FileUploadPage } from '../pages/demo/file-upload/file-upload';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ActionSheetsPage,AlterPage,BadgesPage,ButtonsPage,
    CardsPage,GridPage,InputsPage,ListsPage,IconsPage,
    LoadingPage,MenusPage,ModalsPage,ModalsTestPage,
    PopoverPage,PopoverTestPage,SearchbarPage,SegmentPage,
    SlidesPage,ToastPage,StoragePage,InfiniteScrollPage,
    RefresherPage,FileUploadPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true' //隐藏全部子页面 tabs
      ,backButtonText: '返回' /*配置返回按钮*/
    }),
    IonicStorageModule.forRoot(),
    FileUploadModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ActionSheetsPage,AlterPage,BadgesPage,ButtonsPage,
    CardsPage,GridPage,InputsPage,ListsPage,IconsPage,
    LoadingPage,MenusPage,ModalsPage,ModalsTestPage,
    PopoverPage,PopoverTestPage,SearchbarPage,SegmentPage,
    SlidesPage,ToastPage,StoragePage,InfiniteScrollPage,
    RefresherPage,FileUploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
