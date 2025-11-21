import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  public items: MenuItem[] | undefined;




  ngOnInit() {
    this.menuItems = [
      {
        label: 'new',
        icon: 'pi pi-plus',

      },
      {
        label: 'Open',
        icon: 'pi pi-download',

      },
      {
        label: 'Undo',
        icon: 'pi pi-refresh',
      },
    ]
  }


}
