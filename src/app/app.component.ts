import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'My Profile',
      url: '/profile',
      icon: 'md-person'
    },
    {
      title: 'Inbox',
      url: '/inbox',
      icon: 'md-archive'
    },
    {
      title: 'Policies',
      url: '/policies',
      icon: 'clipboard'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'md-help'
    },
    {
      title: '',
      url: '',
      icon: ''
    },
    {
      title: 'Log Out',
      url: '/logout',
      icon: 'md-exit'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
