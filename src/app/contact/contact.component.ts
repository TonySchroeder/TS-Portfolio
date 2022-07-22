import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    // this.addHight();
  }


  slideToLeft() {
    document.getElementById('startID').style.display = 'flex';
    document.getElementById('mainContainer').style.marginLeft = '0px';
    document.getElementById('contact').style.width = '0px';
    document.getElementById('skillbgForImgID').style.display = 'none';
    document.getElementById('skillID').style.marginTop = 'calc(90vh - 50px)';
    document.getElementById('leftBGID').style.transform = 'translateX(0px)';
  }

  addHight() {
    document.getElementById('messageID').style.transition = 'all 0.255s ease';
    document.getElementById('messageID').style.height = '200px';
  }

}
