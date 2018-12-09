/**
 * @license
 * @copyright CINQ 2018  Inc. All Rights Reserved.
 *
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EndPoint } from '../backend/endpoint';

@Injectable({
    providedIn: 'root'
  }
)
export class NinjaDataService {

  constructor(private http: HttpClient) {

  }

  retrieveTeams(): any {
    let url = EndPoint.TEAM_LIST;
    return this.http.get(url);
  }

  retrieveBeltsByTeam(team: string): any {
    let url = EndPoint.TEAM_BELTS + '/' + team;
    return this.http.get(url);
  }
}
