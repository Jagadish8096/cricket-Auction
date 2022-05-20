import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Team} from './team';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CreateteamService {

  constructor(private httpclient : HttpClient) { }
  public createfromremote(user :Team):Observable<any>{
    return this.httpclient.post<any>('http://localhost:8000/teams/createTeam',user)
    }
    public showallteams(){
      return this.httpclient.get('http://localhost:8000/teams/all');
 
     }
}
