import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  pageLoaded: boolean = false;


  @HostListener('window:load')
  onLoad() {
    console.log('is window:load');
    this.pageLoaded = true;
  }

}
