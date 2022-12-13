import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'services/AnimalService';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {

  name = '';
	food = '';
  
  constructor(private animalService: AnimalService) {}
	
  ngOnInit() {
		this.name = this.animalService.getName();
		this.food = this.animalService.getFood();
	}	

}
