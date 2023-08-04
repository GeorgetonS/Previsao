import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrevisaoPage } from './previsao.page';

const routes: Routes = [
  {
    path: '',
    component: PrevisaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrevisaoPageRoutingModule {}
