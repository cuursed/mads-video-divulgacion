import { Component } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.scheduleDailyNotification();
  }

  async scheduleDailyNotification() {
    // Solicitar permisos para mostrar notificaciones
    const permission = await LocalNotifications.requestPermissions();
    if (permission.display === 'granted') {
      // Programar la notificación a las 9 a.m. todos los días
      await LocalNotifications.schedule({
        notifications: [
          {
            id: 1,
            title: 'Recordatorio Diario',
            body: 'No olvides revisar tus tareas de hoy.',
            iconColor: '#488AFF', // Color del icono
            schedule: {
              repeats: true,
              on: {
                hour: 9,
                minute: 0,
              },
            },
          },
        ],
      });
    }
  }
}
