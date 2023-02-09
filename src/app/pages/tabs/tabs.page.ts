import { Component, OnInit } from '@angular/core';
import { AlertButton, AlertController, NavController } from '@ionic/angular';
import { map, Observable, tap } from 'rxjs';
import { WsApiService } from 'src/app/service/ws-api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  tabs: any[] = [];
  menu: any;
  menu$: any;
  constructor(
    private ws: WsApiService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {}

  ngOnInit(){
    this.tabs = [
      {
        name: 'Home',
        path: 'home',
        icon: 'home'
      },
      {
        name: 'Cart',
        path: 'cart',
        icon: 'cart'
      },
      {
        name: 'Notifications',
        path: 'notifications',
        icon: 'notifications'
      }
    ];
    this.menu$ = this.ws.get('https://dummyjson.com/products/categories');
  }

  async logout(){
    const header = 'Warning';
    const message = 'Are you sure you want to logout?';
    const buttons: AlertButton[] = [{
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'cancel'
    },
    {
      text:'Logout',
      cssClass: 'danger',
      handler: () => {
        this.navCtrl.navigateForward('')
      }
    }];

    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons,
      cssClass: 'danger-alert'
    });
    await alert.present();
  }
}
