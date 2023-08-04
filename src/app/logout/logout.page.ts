import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private navCtrl: NavController,private authService: AuthService) { }

  ngOnInit() {
  }
  
 ionViewWillEnter(){
  this.authService.logout();
  this.navCtrl.navigateRoot('/login');
 }
}
