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
  windowWidth
  showlight: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth
  }


  onMouseMove(e: any) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
    if (this.mouseY > 5000 && this.windowWidth >= 833) {
      this.showlight = false;
    } else if (this.mouseY > 5750 && this.windowWidth <= 832) {
      this.showlight = false;
    } else {
      this.showlight = true;
    }
  }

}


