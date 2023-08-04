import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Plugins, Capacitor } from '@capacitor/core';

const { BiometricAuth } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private useBiometric: boolean = false;
  private authStateSubject: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.checkBiometricSupport();
  }

  async checkBiometricSupport() {
    if (Capacitor.isPluginAvailable('BiometricAuth')) {
      this.useBiometric = true;
    }
  }

  async login(email: string, password: string): Promise<boolean> {
    if (email === 'usuario' && password === 'senha') {
      this.isAuthenticated = true;
      this.authStateSubject.next(true);
      if (this.useBiometric) {
        await BiometricAuth['save']({ value: password });
      }
      return true;
    }

    this.isAuthenticated = false;
    this.authStateSubject.next(false);
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.authStateSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  isBiometricEnabled(): boolean {
    return this.useBiometric;
  }

  getAuthChangeObservable(): Observable<boolean> {
    return this.authStateSubject.asObservable();
  }
}