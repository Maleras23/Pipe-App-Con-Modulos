import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponentRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page.component/uncommon-page.component';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  ],
  imports: [
    CommonModule,
    ProductsComponentRoutingModule
  ]
})
export class ProductsComponentModule { }
