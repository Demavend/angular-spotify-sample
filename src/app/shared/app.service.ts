import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

@Injectable()
export class AppService {
  private spotify: any = {
    client_id: 'f33b579ed56e468ab1615cb34c7a0476',
    cliens_secret_id: '6161ae4b22614372b437cd992d966953'
  };

  constructor(private http: HttpClient) {
  }

  getSpotifyToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${btoa(this.spotify.client_id + ':' + this.spotify.cliens_secret_id)}`
    });
    return this.http.post(`/getSpotifyToken`, null, {headers})
      .pluck('access_token')
      .do(response => this.spotify.token = response);
  }

  getCategories(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.spotify.token}`
    });
    return this.http.get(`https://api.spotify.com/v1/browse/categories`, {headers})
      .pluck('categories', 'items');
  }
}
