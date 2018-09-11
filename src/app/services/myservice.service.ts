import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserAccoutModel} from '../models/userAccout.model';

@Injectable()
export class MyService {
  private url: string;
  constructor( private _http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }
  authUser(User: UserAccoutModel): Observable <any> {
    let param = JSON.stringify(User);
    const headers = new HttpHeaders().set('Contet-Type', 'application/json');
    return this._http.post(this.url + 'auth', param, {headers: headers});
  }
}
