import { Component, HostListener, OnInit, } from '@angular/core';
import { InitFunktionsService } from '../init-funktions.service';
// import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

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

  constructor(public init: InitFunktionsService) { }

  ngOnInit(): void {

  }


  onMouseMove(e:any) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
  }

}


