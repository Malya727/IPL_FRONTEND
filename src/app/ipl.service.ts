import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IplService {
  baseUrl = "https://ipl-2020.herokuapp.com/ipl/";

  constructor(private http: HttpClient) { }
  teamLabels(): Observable<any> {
    let url = `${this.baseUrl}labels`;
    return this.http.get(url);
  }
  getPlayersByTeamName(teamName): Observable<any> {
    let url = `${this.baseUrl}team/${teamName}`;
    return this.http.get(url);
  }
  getTeamRoleStat(teamname): Observable<any> {
    let url = `${this.baseUrl}team/rolestat/${teamname}`;
  return this.http.get(url);
}
  getPlayerByTeamAndRole(teamname,role):Observable<any>{
    let url = `${this.baseUrl}team/${role}/${teamname}`; 
    return this.http.get(url);
  }

  getPlayersByTeamandRole(teamname, role):Observable<any>{
    let url = `${this.baseUrl}team/${role}/${teamname}`
    return this.http.get<any>(url)
  }

  teamDetails():Observable<any>{
    let url = `${this.baseUrl}teams`;
    return this.http.get(url);
  }
  allTeamStat():Observable<any>{
    let url = `${this.baseUrl}allteamstat`;
    return this.http.get(url);
  }

  priceStat(teamname):Observable<any>{
    let url = `${this.baseUrl}rolestat/${teamname}`;
    return this.http.get(url);
  }

  sortbyprice():Observable<any>{
    let url = `${this.baseUrl}sortbyprice`;
    return this.http.get(url);
  }

  maxpriceallrounder():Observable<any>{
    let url = `${this.baseUrl}maxbyrole/All-Rounder`;
    return this.http.get(url);
  }

  maxpricewicket():Observable<any>{
    let url = `${this.baseUrl}maxbyrole/Wicket Keeper`;
    return this.http.get(url);
  }

  maxpricebat():Observable<any>{
    let url = `${this.baseUrl}maxbyrole/Batsman`;
    return this.http.get(url);
  }

  maxpricebowl():Observable<any>{
    let url = `${this.baseUrl}maxbyrole/Bowler`;
    return this.http.get(url);
  }


}