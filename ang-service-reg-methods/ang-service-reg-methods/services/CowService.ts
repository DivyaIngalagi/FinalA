import { Injectable } from '@angular/core';
import { AnimalService } from './AnimalService';

@Injectable()
export class CowService extends AnimalService {
	override name = 'Cow';
	override food = 'Grass';	
} 