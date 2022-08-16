import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  public name: string = '';
  public email: string = '';
  public message: string = '';

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }


  addHight() {
    document.getElementById('messageID').style.transition = 'all 0.255s ease';
    document.getElementById('messageID').style.height = '200px';
  }


  onSubmit() {

    let message = {
      'name': this.name,
      'email': this.email,
      'message': this.message
    }
    console.log(message);
  }


}
