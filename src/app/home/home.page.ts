import { Component } from '@angular/core';
import {InAppBrowser, InAppBrowserObject} from '@ionic-native/in-app-browser/ngx'
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  browser: InAppBrowserObject;

  constructor(private iab: InAppBrowser, public platform: Platform) {
    platform.ready().then(() => {
      this.openInAppBrowser();
    });

  }


  openInAppBrowser()
  {
    this.browser = this.iab.create('https://heise.de','_blank',{zoom:'no',location:'no'});
    this.browser.show();
  }

}
