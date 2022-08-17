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

  // container:any = document.querySelector('.container');
  // bg:any = document.querySelector('.bg');
  mouseX: any;
  mouseY: any;

  constructor(public init: InitFunktionsService) { }

  ngOnInit(): void {

  }


  onMouseMove(e:any) {
    // this.mouseX = e.clientX;
    this.mouseX = e.pageX;
    // this.mouseY = e.clientY;
    this.mouseY = e.pageY;
    // console.log(e);
  }


  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: any) {
  //   this.mouseX = event.clientX
  //   this.mouseY = event.clientY
  //   console.log(`x: ${event.clientX}, y: ${event.clientY}`);
  // }

  // id = "tsparticles";

  // /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  // particlesUrl = "http://foo.bar/particles.json";

  // /* or the classic JavaScript object */
  // particlesOptions = {
  //   background: {
  //     color: {
  //       value: "transparent"
  //     }
  //   },
  //   fpsLimit: 120,
  //   interactivity: {
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: ClickMode.push
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: HoverMode.repulse
  //       },
  //       resize: true
  //     },
  //     modes: {
  //       push: {
  //         quantity: 4
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4
  //       }
  //     }
  //   },
  //   particles: {
  //     color: {
  //       value: ["#5221e6"]
  //     },
  //     links: {
  //       color: "transparent",
  //       distance: 150,
  //       enable: true,
  //       opacity: 0.5,
  //       width: 1
  //     },
  //     collisions: {
  //       enable: true
  //     },
  //     move: {
  //       direction: MoveDirection.none,
  //       enable: true,
  //       outModes: {
  //         default: OutMode.bounce
  //       },
  //       random: false,
  //       speed: 3,
  //       straight: false
  //     },
  //     number: {
  //       density: {
  //         enable: true,
  //         area: 800
  //       },
  //       value: 13
  //     },
  //     opacity: {
  //       value: 0.5
  //     },
  //     shape: {
  //       type: ["square", "circle", "polygon"]
  //       // type: "circle"
  //       // type: "polygon"

  //     },
  //     size: {
  //       value: { min: 20, max: 90 },
  //       anim: {
  //         enable: true,
  //         speed: 60,
  //       }
  //     }
  //   },
  //   detectRetina: true
  // };

  // particlesLoaded(container: Container): void {
  //   console.log(container);
  // }

  // async particlesInit(engine: Engine): Promise<void> {
  //   console.log(engine);

  //   // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   await loadFull(engine);
  // }

}


