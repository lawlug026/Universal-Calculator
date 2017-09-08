import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'temp-con',
	templateUrl: 'temp.component.html'
})

export class TempComponent{
	cel:number=0;
	far:number=0;
	celout:number;
	farout:number;

	celToFar(): void{
		this.farout = (1.8*this.cel) +32;
	}

	farToCel(): void{
		this.celout = (this.cel - 32)/1.8;
	}
}