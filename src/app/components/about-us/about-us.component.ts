import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		AOS.init()
	}

}
