import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public appPages: any[] = [];

  public appPagesLoggedOut = [
    { title: 'Login', url: '/login', icon: 'log-in' }
  ];

  public appPagesLoggedIn = [
    { title: 'Pagina Inicial', url: '/home', icon: 'home' },
    { title: 'Novidades', url: '/novidades', icon: 'newspaper' },
    { title: 'Favoritos', url: '/favoritos', icon: 'heart' },
    { title: 'Previsão do Tempo', url: '/previsao', icon: 'rainy' },
    { title: 'Sair', url: '/logout', icon: 'exit' }
];
  
 public selectorFolder!: string;

 private authStateSubscription: Subscription;

 constructor(private authService: AuthService) {
   this.authStateSubscription = this.authService.getAuthChangeObservable().subscribe((isLoggedIn) => {
     this.appPages = isLoggedIn
       ? [
        { title: 'Pagina Inicial', url: '/home', icon: 'home' },
        { title: 'Novidades', url: '/novidades', icon: 'newspaper' },
        { title: 'Favoritos', url: '/favoritos', icon: 'heart' },
        { title: 'Previsão do Tempo', url: '/previsao', icon: 'rainy' },
        { title: 'Sair', url: '/logout', icon: 'exit' }
        ]
       : [
           { title: 'Login', url: '/login', icon: 'log-in' }
         ];
   });
 }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
  }

  ngOnInit(): void {
      
  }

  public onMenuSelect(folder: string){
    console.log('Selected folder:', folder);
    this.selectorFolder = folder;
  }
}
