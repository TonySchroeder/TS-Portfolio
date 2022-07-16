import { Component, OnInit, HostListener, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-start-side',
  templateUrl: './start-side.component.html',
  styleUrls: ['./start-side.component.scss']
})
export class StartSideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset
          || document.documentElement.scrollTop
          || document.body.scrollTop || 0;
          // console.log(verticalOffset);
          this.fixOnScroll(verticalOffset);
  }


  fixOnScroll(verticalOffset){
    let opacityValue = 1 - verticalOffset / 350;
    let opacityFix = 1 - 450 / 350;
  if(verticalOffset < 450){
    document.getElementById('bgID').style.opacity = `${opacityValue}`;
    document.getElementById('welcomeTextID').style.transform = `translateX(-${verticalOffset}px)`;
    document.getElementById('welcomeImgID').style.transform = `translateX(${verticalOffset}px)`;
    // document.querySelectorAll('i').style.opacity = `${opacityValue}`;
    for (let i = 0; i < 4; i++) {
      document.getElementById(`iText${i}`).style.opacity = `${opacityValue}`;
    }
  } else  if (verticalOffset >= 450) {
    document.getElementById('bgID').style.opacity = `${opacityFix}`;
    document.getElementById('welcomeTextID').style.transform = `translateX(-450px)`;
    document.getElementById('welcomeImgID').style.transform = `translateX(450px)`;
    for (let i = 0; i < 4; i++) {
      document.getElementById(`iText${i}`).style.opacity = `${opacityFix}`;
    }
  }
  if(verticalOffset > 225){
    document.getElementById('wContactID').style.justifyContent = `start`;
    document.getElementById('wContactID').style.marginLeft = `125px`;
    document.getElementById('talkID').style.display = `none`;
    document.getElementById('mailID').style.display = `flex`;
  } else if (verticalOffset < 225) {
    document.getElementById('wContactID').style.justifyContent = `center`;
    document.getElementById('wContactID').style.marginLeft = ``;
    document.getElementById('talkID').style.display = `flex`;
    document.getElementById('mailID').style.display = `none`;
  }
  }
}
