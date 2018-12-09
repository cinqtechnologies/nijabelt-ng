/**
 * @license
 * @copyright CINQ 2018  Inc. All Rights Reserved.
 *
 */

import { environment } from '../../environments/environment';

export class EndPoint {

  // Retrieve a list of belts given the team name e.x '/team/belts/{{teamName}}'
  static TEAM_BELTS: string = environment.api_url + '/team/belts';

  // retrieve a list of all teams.
  static TEAM_LIST: string = environment.api_url + '/team/list';

}


