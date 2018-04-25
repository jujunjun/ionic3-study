import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FileUploader } from 'ng2-file-upload';

/**
 * Generated class for the FileUploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-file-upload',
  templateUrl: 'file-upload.html',
})
export class FileUploadPage {

  public URL = 'http://bd.xjyr-shop.cc/index.php?m=Admin&c=Upload&a=upload&action=uploadimage&savepath=xx';
  public uploader: FileUploader;
  public img_src = 'assets/imgs/default_uploader.png';
  public upload_url = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileUploadPage');
    this.uploader = new FileUploader({
      url: this.URL
      , method: "POST"
      , itemAlias: "upfile"
      , autoUpload: true
    });
    let that = this;
    this.uploader.onSuccessItem = function (item, response, status, headers) {
      if(status == 200){
        let rsp = JSON.parse(response);
        that.upload_url = that.img_src = "http://bd.xjyr-shop.cc"+  rsp.url;
      }
    };
  }

  // public upload() {
  //   console.log(this.uploader.queue);
  //   // this.uploader.uploadAll();
  //   this.uploader.queue.forEach(queue => {
  //     queue.withCredentials = false;
  //     queue.onError = (response: string, status: number, headers: ParsedResponseHeaders) => {
  //       console.log(response, status, headers);
  //     };

  //     queue.onSuccess = (response, status, headers) => {
  //       if (status == 201) {
  //         let res = JSON.parse(response);
  //         console.log("res", res);
  //       } else {
  //         //console.log("err",response, status, headers);//判断错在哪同样重要
  //         console.log("err", Error);
  //       }
  //     };

  //     queue.upload();
  //   });
  // }

  // public itemupload(item) {
  //   item.onSuccess = function (response, status, headers) {
  //     console.log(response);
  //     console.log(status);
  //   };
  //   item.withCredentials = true;
  //   item.crossDomain = true;
  //   item.upload();
  // }
}
