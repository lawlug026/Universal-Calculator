import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'uc-app',
	templateUrl: 'app-component.html'
})

export class AppComponent{
	pageTitle : string = 'Universal Calculator';
	searchBox: string= "";
}