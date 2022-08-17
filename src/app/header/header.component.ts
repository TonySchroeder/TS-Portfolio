import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerVisibility: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
          if (verticalOffset > 100) {
            this.headerVisibility = true;
          } else {
            this.headerVisibility = false;
          }
          // console.log(this.headerVisibility);

}

}
