import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.css']
})
export class IfElseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isShown:boolean=false;//hidden by default
  toggleShow(){
    this.isShown=!this.isShown;
  }


}
