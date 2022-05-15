import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
