import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrevisaoPageRoutingModule } from './previsao-routing.module';

import { PrevisaoPage } from './previsao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrevisaoPageRoutingModule
  ],
  declarations: [PrevisaoPage]
})
export class PrevisaoPageModule {}
