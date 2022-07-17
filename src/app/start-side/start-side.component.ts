import { Component, OnInit, HostListener, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-start-side',
  templateUrl: './start-side.component.html',
  styleUrls: ['./start-side.component.scss']
})
export class StartSideComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }



  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    // console.log(verticalOffset);
    if(window.innerWidth > 1800){
      this.textImgMoveOnScroll(verticalOffset);
      document.getElementById('startID').style.position = 'fixed';
      document.getElementById('skillID').style.marginTop = 'calc(90vh - 50px)';
    } else  if(window.innerWidth < 1800){
      document.getElementById('startID').style.position = 'relative';
      document.getElementById('skillID').style.marginTop = '0px';
    }
  }


  textImgMoveOnScroll(verticalOffset) {
    let opacityValue = 1 - verticalOffset / 350;
    let opacityFix = 1 - 450 / 350;
    this.slideTextAndImage(verticalOffset, opacityValue, opacityFix);
    this.changeContactButton(verticalOffset);
  }



  slideTextAndImage(verticalOffset, opacityValue, opacityFix) {
    if (verticalOffset < 450) {
      this.movementOfTextAndImg(verticalOffset, opacityValue);
    } else if (verticalOffset >= 450) {
      this.standStillOfTextAndImg(opacityFix);
    }
  }


  movementOfTextAndImg(verticalOffset, opacityValue) {
    document.getElementById('bgID').style.opacity = `${opacityValue}`;
    document.getElementById('welcomeTextID').style.transform = `translateX(-${verticalOffset}px)`;
    document.getElementById('welcomeImgID').style.transform = `translateX(${verticalOffset}px)`;
    if (verticalOffset < 350) {
      document.getElementById('underWContact').style.width = `calc(350px - (${verticalOffset}px / 2))`;
    } else if (verticalOffset > 350) {
      document.getElementById('underWContact').style.width = `calc(350px - (${verticalOffset}px / 1.45))`;
    }
    for (let i = 0; i < 4; i++) {
      document.getElementById(`iText${i}`).style.opacity = `${opacityValue}`;
    }
  }


  standStillOfTextAndImg(opacityFix) {
    document.getElementById('bgID').style.opacity = `${opacityFix}`;
    document.getElementById('welcomeTextID').style.transform = `translateX(-450px)`;
    document.getElementById('welcomeImgID').style.transform = `translateX(450px)`;
    document.getElementById('underWContact').style.width = `calc(350px - (450px / 1.45))`;
    for (let i = 0; i < 4; i++) {
      document.getElementById(`iText${i}`).style.opacity = `${opacityFix}`;
    }
  }


  changeContactButton(verticalOffset) {
    if (verticalOffset > 350) {
      document.getElementById('wContactID').style.justifyContent = `start`;
      document.getElementById('wContactID').style.marginLeft = `125px`;
      document.getElementById('talkID').style.display = `none`;
      document.getElementById('mailID').style.display = `flex`;
    } else if (verticalOffset < 350) {
      document.getElementById('wContactID').style.justifyContent = `center`;
      document.getElementById('wContactID').style.marginLeft = ``;
      document.getElementById('talkID').style.display = `flex`;
      document.getElementById('mailID').style.display = `none`;
    }
  }








}
