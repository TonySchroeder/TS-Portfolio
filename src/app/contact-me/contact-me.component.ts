import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  endpoint = "http://@tony-schroeder.developerakademie.net/send_mail.php";
  submitReport = '';
  submitComplete = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    AOS.init();
  }


  addHight() {
    document.getElementById('message').style.transition = 'all 0.255s ease';
    document.getElementById('message').style.height = '200px';
  }


  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }

  sendForm(form: any) {
    console.log(form);

    this
      .http
      .post(this.endpoint, form.value)
      .subscribe(
        response => this.handleResponse(response, form),
        error => this.handleError(error, form)
      );
  }

  handleResponse(response: any, form: any) {
    console.log(response);
    this.submitReport = "Thank up for your Contact. I will replay as soon as possible!";
    this.submitComplete = true;
    form.reset();
  }

  handleError(error: any, form: any) {
    console.log(error);
    this.submitReport = "Error occure while sending your message! You can contact me directly on E-Mail: tony.schroeder@gmx.de.";
    this.submitComplete = true;
    form.reset();
  }


  closeCard() {
    this.submitComplete = false;
    this.submitReport = '';
  }


}
