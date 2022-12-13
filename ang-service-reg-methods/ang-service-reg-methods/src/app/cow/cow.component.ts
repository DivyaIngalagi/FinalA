import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'services/AnimalService';
import { CowService } from 'services/CowService';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.css'],
  providers:[{provide:AnimalService, useClass:CowService}]
})
export class CowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
