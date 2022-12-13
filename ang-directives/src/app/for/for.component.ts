import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employees:any[]=[

    {code:'emp1',name:'Divya',gender:'Female'},{code:'emp2',name:'Sunita',gender:'Female'},
    {code:'emp3',name:'Anand',gender:'Male'}

  ];

}
