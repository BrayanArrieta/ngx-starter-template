import { Component, OnInit } from '@angular/core';
// import {ToasterManagerService} from './toaster-manager.service';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
@Component({
  selector: 'ngx-first-example',
  templateUrl: './first-example.component.html',
  styleUrls: ['./first-example.component.scss'],
})
export class FirstExampleComponent implements OnInit {
  // constructor(private toasterManagerService: ToasterManagerService) {}

  ngOnInit() {
  }
  constructor(private toasterService: ToasterService) {}
  // showToast() {
  //   this.toasterManagerService.makeToast();
  // }
  config: ToasterConfig;
  // params config
  position = 'toast-top-right';
  animationType = 'fade';
  title = 'HI there!';
  content = `I'm cool toaster!`;
  timeout = 5000;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = true;




  makeToast() {
    this.showToast(this.type, this.title, this.content);
  }
  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

  clearToasts() {
    this.toasterService.clear();
  }

}
