import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  card = document.querySelector('.card');
  container = document.querySelector('.cartContainer');

  constructor() { }

  ngOnInit(): void {
    this.container.addEventListener('mousemove', (e) => {
      // console.log(e.pageX);
    });
  }





}
