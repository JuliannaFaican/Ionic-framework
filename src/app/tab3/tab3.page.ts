import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['diseños.css']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Alerta de Ionic',
      message: 'Hola desde Angular Ionic',
      buttons: ['OK', 'Cancel'],
    });

    await alert.present();
  }

}
