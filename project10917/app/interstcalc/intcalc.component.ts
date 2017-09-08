import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector:'int-ap',
	templateUrl:'intcalc.component.html'
})

export class IntCalcComponent{

	principal:number=0;
	rate:number=0;
	time:number=0;
	si:number;
	ci:number; 

	public calculateSI(): void{
		 this.si = this.principal*this.rate*this.time/100;

	}

	public calculateCI(): void{
		 this.ci = this.principal*this.rate*this.time/100;

	}

	


}