import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '(document:mousemove)': 'onMouseMove($event)'
  }
})
export class AboutComponent implements OnInit {

  mouseX: any;
  mouseY: any;

cursor:any = document.querySelector('cursor');

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }


  onMouseMove(e: any) {
    this.mouseX = e.pageX;
    this.mouseY = e.pageY;
   }

}
