import { Component, OnInit } from '@angular/core';
import { DesktopService } from 'services/desktop.service';
import { LaptopService } from 'services/laptop.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css'],
  providers: [ 
    LaptopService,
    { provide: DesktopService, useExisting: LaptopService }
  ] 
})
export class ComputerComponent implements OnInit {

  computerName = '';

	constructor(private computerService: DesktopService) { }
	
  ngOnInit() {
		this.computerName = this.computerService.getComputerName();
	}

}
