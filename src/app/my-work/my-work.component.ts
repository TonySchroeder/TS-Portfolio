import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']

})
export class MyWorkComponent implements OnInit {

  hoverCart: boolean;

  constructor() {
this.hoverCart = false;


  }

  ngOnInit(): void {

}


mouseMoved(event: MouseEvent) {
  let cart =  document.getElementById('innerCard');
  let xAxis=(document.getElementById('cartID').getBoundingClientRect().width / 2 - event.x) / 30;
  let yAxis=(document.getElementById('cartID').getBoundingClientRect().height / 2 - event.y) / 30;
  document.getElementById('flagID').style.transform = 'translateZ(150px)'
  cart.style.transition = 'none';
  cart.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

}


setFalse(){
  let cart =  document.getElementById('innerCard');
  cart.style.transition = 'all 0.5s ease';
  cart.style.transform = `rotateY(0deg) rotateX(0deg)`;
}


}
