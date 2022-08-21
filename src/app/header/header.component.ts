import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerVisibility: boolean = false;
  openMenu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * Header Background becomes transparent when scrolling
   */
  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    if (verticalOffset > 50) {
      this.headerVisibility = true;
    } else {
      this.headerVisibility = false;
    }
  }


/**
 * responsive menu open or close
 */
  openingMenu() {
    this.openMenu = !this.openMenu;
  }

}
