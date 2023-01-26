import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { WsApiService } from 'src/app/service/ws-api.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{
  tabs: any[] = [];
  menu: any=[];
  menu$: any;
  constructor(
    private ws:WsApiService
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
      },
      {
        name: 'Logout',
        path: 'logout',
        icon: 'log-out'
      }
    ];
    this.menu$ = this.ws.get('https://api.storerestapi.com/categories').pipe(map(data =>
    data)).subscribe(data => console.log(data));
  }
}
