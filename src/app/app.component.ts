/**
 * @license
 * @copyright CINQ 2018  Inc. All Rights Reserved.
 *
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHomePage: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        this.isHomePage = event.url === '/';
      }
    });
  }
}
