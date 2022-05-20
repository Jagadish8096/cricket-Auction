import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpParams } from '@angular/common/http'
import { Player } from './player';
@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerName: string | undefined;
  constructor(private httpclient : HttpClient) { }
  public playerfromremote(user1 :Player):Observable<any>{
    return this.httpclient.post<any>('http://localhost:8001/players/createPlayer',user1)
    }

    public showallplayers()
    {
     return this.httpclient.get('http://localhost:8001/players/all');
    }
   
    //private baseURL="http://localhost:8001/players/getPlayers/";
  
    public getPlayerByName(playerName:Player):Observable<any>
    {
      //return this.httpclient.get<Player>(`${this.baseURL}/${playerName}`);
      return this.httpclient.get<any>('http://localhost:8001/players/getPlayers/'+playerName)
    }

   }

