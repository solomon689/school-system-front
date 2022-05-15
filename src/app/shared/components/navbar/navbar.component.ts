import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showSideBar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onMenuClick(): void {
    const navMenu: HTMLElement | null = document.querySelector('.hamburger');

    navMenu?.classList.toggle('active');
    this.showSideBar = !this.showSideBar;
  }
}
