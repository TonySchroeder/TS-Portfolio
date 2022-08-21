import { Component, HostListener, OnInit, } from '@angular/core';
;

@Component({
  selector: 'app-bg-animation',
  templateUrl: './bg-animation.component.html',
  styleUrls: ['./bg-animation.component.scss'],
  host: {
    '(document:mousemove)': 'onMouseMove($event)'
  }
})
export class BgAnimationComponent implements OnInit {

  mouseX: any;
  mouseY: any;
  windowWidth: number = 833;
  showLight: boolean = true;


  constructor() {}

  ngOnInit(): void {
  }


/**
 * assign window width
 *
 * @param event - window data
 */
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowWidth = event.target.innerWidth

  }


/**
 * assign the mouse coordinates
 *
 * @param e - mouse move data
 */
  onMouseMove(e: any) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
    this.showBackLight();
   }


/**
 * display the background lighting or not
 */
   showBackLight(){
     if (this.mouseY > 5000 && this.windowWidth >= 833) {
      this.showLight = false;
    } else if (this.mouseY > 5650 && this.windowWidth <= 832) {
      this.showLight = false;
    } else {
      this.showLight = true;
    }
   }
}


