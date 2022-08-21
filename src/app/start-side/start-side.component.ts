import { Component, OnInit, HostListener, IterableDiffers } from '@angular/core';

@Component({
  selector: 'app-start-side',
  templateUrl: './start-side.component.html',
  styleUrls: ['./start-side.component.scss']
})
export class StartSideComponent implements OnInit {

  slideright = false;
  constructor() {}


  ngOnInit(): void {
  }
}
