import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private oneSignal: OneSignal) { }

  configuracionInicial(){
    this.oneSignal.startInit('d9e2e1fa-b536-48b8-966e-226d0f539acb', '78954115246');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
    // do something when notification is received
    console.log('Notificacion reicibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // do something when a notification is opened
      console.log('Notificacion abierta', noti);
    });

    this.oneSignal.endInit();



  }


}
