import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { Menu } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Menu,
    ToastModule,
    MenuModule,
  ],
  exports: [
    MenuModule,
  ]
})
export class PrimeNgModule { }
