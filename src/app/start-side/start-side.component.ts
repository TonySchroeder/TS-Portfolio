import { Component, OnInit, HostListener, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-start-side',
  templateUrl: './start-side.component.html',
  styleUrls: ['./start-side.component.scss']
})
export class StartSideComponent implements OnInit {

  slideright = false;
  constructor() {

  }

  ngOnInit(): void {
  }


  slideToRight() {
    this.slideright = true;
    document.getElementById('startID').style.display = 'none';
    document.getElementById('mainContainer').style.marginLeft = '1600px';
    document.getElementById('contact').style.width = 'auto';
    document.getElementById('skillbgForImgID').style.display = 'flex';
  }


  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    this.checkWindowWidth(verticalOffset);
  }


  checkWindowWidth(verticalOffset) {
    if (window.innerWidth > 1800) {
      this.textImgMoveOnScroll(verticalOffset);
      this.standStartAndSkill();
    } else if (window.innerWidth < 1800) {
      this.changeStartAndSkill();
    }
  }


  standStartAndSkill() {
    document.getElementById('startID').style.position = 'fixed';
    document.getElementById('skillID').style.marginTop = 'calc(90vh - 50px)';
  }


  changeStartAndSkill() {
    document.getElementById('startID').style.position = 'relative';
    if (document.getElementById('startID').style.display == 'none') {
      document.getElementById('skillID').style.marginTop = 'calc(90vh - 50px)';
    } else {
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
    this.slideTheButton(verticalOffset);
    for (let i = 0; i < 4; i++) {
      document.getElementById(`iText${i}`).style.opacity = `${opacityValue}`;
    }
  }


  slideTheButton(verticalOffset) {
    if (verticalOffset < 350) {
      document.getElementById('underWContact').style.width = `calc(350px - (${verticalOffset}px / 2))`;
    } else if (verticalOffset > 350) {
      document.getElementById('underWContact').style.width = `calc(350px - (${verticalOffset}px / 1.45))`;
    }
  }


  standStillOfTextAndImg(opacityFix) {
    this.changeTextAndImg(opacityFix);
    for (let i = 0; i < 4; i++) {
      document.getElementById(`iText${i}`).style.opacity = `${opacityFix}`;
    }
  }


  changeTextAndImg(opacityFix) {
    document.getElementById('bgID').style.opacity = `${opacityFix}`;
    document.getElementById('welcomeTextID').style.transform = `translateX(-450px)`;
    document.getElementById('welcomeImgID').style.transform = `translateX(450px)`;
    document.getElementById('underWContact').style.width = `calc(350px - (450px / 1.45))`;
  }


  changeContactButton(verticalOffset) {
    if (verticalOffset > 350) {
      this.slideButton();
    } else if (verticalOffset < 350) {
      this.changeButton();
    }
    this.hiddeArrow(verticalOffset);
  }


  slideButton() {
    document.getElementById('wContactID').style.justifyContent = `start`;
    document.getElementById('wContactID').style.marginLeft = `125px`;
    document.getElementById('talkID').style.display = `none`;
    document.getElementById('mailID').style.display = `flex`;
  }


  changeButton() {
    document.getElementById('wContactID').style.justifyContent = `center`;
    document.getElementById('wContactID').style.marginLeft = ``;
    document.getElementById('talkID').style.display = `flex`;
    document.getElementById('mailID').style.display = `none`;
  }


  hiddeArrow(verticalOffset) {
    if (verticalOffset > 250) {
      document.getElementById('arrowRightID').style.display = `none`;
      document.getElementById('underWContact').style.justifyContent = `center`;
    } else if (verticalOffset < 250) {
      document.getElementById('arrowRightID').style.display = `block`;
      document.getElementById('underWContact').style.justifyContent = `space-between`;
    }
  }






}
