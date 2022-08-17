import { Component, OnInit, } from '@angular/core';
import AOS from 'aos';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']

})

export class MyWorkComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {
    AOS.init();
    VanillaTilt.init(document.querySelector('.vanillaTilt1') as any, {
      reverse: true,
      scale: 1.1,
      speed: 400,
      perspective: 1000,

    });
    VanillaTilt.init(document.querySelector('.vanillaTilt2') as any, {
      reverse: true,
      scale: 1.1,
      speed: 400,
      perspective: 1000,
    });
    VanillaTilt.init(document.querySelector('.vanillaTilt3') as any, {
      reverse: true,
      scale: 1.1,
      speed: 400,
      perspective: 1000,
    });
    VanillaTilt.init(document.querySelector('.vanillaTilt4') as any, {
      reverse: true,
      scale: 1.1,
      speed: 400,
      perspective: 1000,
    });
  }

}
