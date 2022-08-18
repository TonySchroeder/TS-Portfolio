import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  name: string = '';
  email: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }


  addHight() {
    document.getElementById('messageID').style.transition = 'all 0.255s ease';
    document.getElementById('messageID').style.height = '200px';
  }


  sendMessage() {
    // let complettMessage = {

    // }

    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
  }


}
