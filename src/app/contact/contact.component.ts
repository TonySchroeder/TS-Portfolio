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
    // this.slideToRight();
    // this.addHight();
  }


slideToRight(){
  document.getElementById('mainContainer').style.marginLeft = '1600px';
}

addHight(){
  document.getElementById('messageID').style.height = '200px';
}

}
