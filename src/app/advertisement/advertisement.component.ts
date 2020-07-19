import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {
  type: string = 'ad1'
  data: any = {
    name: 'hello'
  }
  constructor() { }
  change (val) {
    this.type = val
    
  }
  ngOnInit() {
  }

}
