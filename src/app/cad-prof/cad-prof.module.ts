import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadProfPageRoutingModule } from './cad-prof-routing.module';

import { CadProfPage } from './cad-prof.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadProfPageRoutingModule
  ],
  declarations: [CadProfPage]
})
export class CadProfPageModule {}
