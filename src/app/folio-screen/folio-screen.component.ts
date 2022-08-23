import { Component, OnInit } from '@angular/core';
import { loadFull } from 'tsparticles';
import { ClickMode, Container, Engine, HoverMode } from 'tsparticles-engine';
import { MoveDirection } from 'tsparticles-engine/types/Enums/Directions/MoveDirection';
import { OutMode } from 'tsparticles-engine/types/Enums/Modes/OutMode';

@Component({
  selector: 'app-folio-screen',
  templateUrl: './folio-screen.component.html',
  styleUrls: ['./folio-screen.component.scss']
})
export class FolioScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: " linear-gradient(90deg, rgba(31, 31, 31, 1) 25%, rgba(7, 0, 13, 1) 100%)"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 5,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 20
      },
      opacity: {
        value: 0.05
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 20, max: 60 },
      }
          },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }



}
