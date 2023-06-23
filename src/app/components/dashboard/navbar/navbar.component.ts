import { Component } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu';

import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menu: Menu[] = [];

  constructor(private _menuService: MenuService){  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    this._menuService.getMenu().subscribe( (result) => {
      this.menu = result;
    });
  }
}
