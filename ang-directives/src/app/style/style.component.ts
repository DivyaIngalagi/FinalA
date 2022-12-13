import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  people:any[]=[

    {"name":"Divya","country":"India"},{"name":"Anand","country":"Australia"}


  ];

  getColor(country:string){
    switch(country){
      case "India":
      return "orange";
      case "USA":
      return "yellow";
    }
    return "blue";
  }

}
