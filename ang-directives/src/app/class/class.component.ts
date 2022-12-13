import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

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
