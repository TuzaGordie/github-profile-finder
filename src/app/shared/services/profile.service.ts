import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  username: string;
  clientId: '5a0ad62deb6ad25afd58';
  clientSecret: '998ff3911fd8eafe3d344e7d034c4b10a1e86c57';
  constructor(private http: HttpClient) {
    console.log('service is ready!!!');
  }

  getProfileInfo(): Observable<HttpResponse<any>> {
    return this.http
      .get<HttpResponse<any>>('https://api.github.com/users/' + this.username + '?client_id=' + this.clientId + '&client_secret' +
        this.clientSecret, {observe: 'response'}).pipe(map((res: any) => res.body));
  }

  getProfileRepo(): Observable<HttpResponse<any>> {
    return this.http
      .get<HttpResponse<any>>('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientId + '&client_secret' +
        this.clientSecret, {observe: 'response'}).pipe(map((res: any) => res.body));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
