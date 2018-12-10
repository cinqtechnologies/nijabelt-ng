/**
 * @license
 * @copyright CINQ 2018  Inc. All Rights Reserved.
 *
 */

import { Component, OnInit } from '@angular/core';

import { NinjaDataService } from '../backend';

@Component({
  selector: 'app-team-presenters',
  templateUrl: './team-presenters.component.html',
  styleUrls: [
    '../app.component.css',
    './team-presenters.component.css'
  ]
})
export class TeamPresentersComponent implements OnInit {


  isBelts: boolean;
  displayLoanding: boolean;
  ninjaTeams: any[];
  belts: any [];

  constructor(private dataService: NinjaDataService) {
  }

  ngOnInit() {
    this.dataService.retrieveTeams()
      .subscribe(data => {
        this.ninjaTeams = data.teams.filter(team => team.isPresenter);
      });
  }

  loadBelts(teamName: string): void {
    this.displayLoanding = true;
    this.isBelts = false;
    this.dataService.retrieveBeltsByTeam(teamName.toLowerCase())
      .subscribe(data => {
        this.belts = data.belts;
        this.isBelts = data.belts.length > 0;
        this.displayLoanding = false;
      });
  }
}
