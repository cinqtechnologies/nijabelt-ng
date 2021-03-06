/**
 * @license
 * @copyright CINQ 2018  Inc. All Rights Reserved.
 *
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHomePage: boolean;
  env: string;

  constructor(private router: Router,
              private titleService: Title) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.isHomePage = event.url === '/';
      }
    });

    this.env = environment.env;

    this.titleService.setTitle('NinjaB-' + this.env.toUpperCase());
  }
}
