import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    IconFieldModule,
    InputIconModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    ToolbarModule,
  ]
})
export class PrimeNgModule { }
