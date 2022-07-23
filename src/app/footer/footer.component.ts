import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

  addHight() {
    document.getElementById('messageID').style.transition = 'all 0.255s ease';
    document.getElementById('messageID').style.height = '200px';
  }


onSubmit(){
let name = document.getElementById('nameID').value;
let email = document.getElementById('emailID').value;
let text = document.getElementById('messageID').value;

let message = {
  'name': name.value,
  'email': email.value,
  'text': text.value
}
}



}
