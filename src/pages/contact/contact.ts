import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileUploadPage } from '../demo/file-upload/file-upload';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public list = [];

  constructor(public navCtrl: NavController) {
    this.list.push({'name':'File Upload', 'page':FileUploadPage});
  }

}
