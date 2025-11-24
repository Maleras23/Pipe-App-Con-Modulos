import { Component } from '@angular/core';


@Component({
  selector: 'products-basics-page',
  standalone: false,
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {

  public nameLower: string = 'carlos';
  public nameUpper: string = 'CARLOS';
  public fullname: string = 'cAlOs caLZadILLa';

  public customeDate: Date = new Date();

}
