import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { Plugins, Capacitor } from '@capacitor/core';

const { BiometricAuth } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email!: string;
  password!: string;

  constructor(private navCtrl: NavController, private authService: AuthService, private toastController: ToastController) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    if (this.authService.isLoggedIn()) {
      this.navCtrl.navigateRoot('/home');
    }

    if (this.authService.isBiometricEnabled() && Capacitor.isPluginAvailable('BiometricAuth')) {
      try {
        const result = await BiometricAuth['verify']({
          reason: 'Faça a autenticação biométrica para continuar.',
        });

        if (result.verified) {
          if (await this.authService.login('usuario', result.value)) {
            this.navCtrl.navigateRoot('/home');
          }
        }
      } catch (error) {
        console.log('Erro na autenticação biométrica:', error);
      }
    }
  }

  async login() {
    if (await this.authService.login(this.email, this.password)) {
      this.navCtrl.navigateRoot('/home');
    } else {
      const toast = await this.toastController.create({
        message: 'Usuário ou senha incorretos. Favor, tente novamente ou recupere sua senha',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }
  }
}