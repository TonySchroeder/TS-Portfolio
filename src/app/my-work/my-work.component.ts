import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']

})

export class MyWorkComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {

}


mouseMoved(event: MouseEvent) {
  let cart =  document.getElementById('innerCard');
  let xAxis=(document.getElementById('cartID').getBoundingClientRect().width / 2 - event.offsetX) / 25;
  let yAxis=(document.getElementById('cartID').getBoundingClientRect().height / 2 - event.offsetY) / 25;
  document.getElementById('cartID').style.perspective = '1000px';
  document.getElementById('flagID').style.transform = 'translateZ(150px)';
  document.getElementById('flagID').style.transition = 'all 0.255s ease';
  document.getElementById('flagID').style.transform = 'scale(1.3)';
  cart.style.transition = 'none';
  cart.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  // console.log(event);
}



setFalse(){
    let cart =  document.getElementById('innerCard');
  cart.style.transition = 'all 0.5s ease';
  cart.style.transform = `rotateY(0deg) rotateX(0deg)`;
  document.getElementById('flagID').style.transform = 'translateZ(0px)';
  document.getElementById('flagID').style.transform = 'scale(1)';
}


mouseLog(event: MouseEvent){
  console.log(event);
}


}
