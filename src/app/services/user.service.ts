import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IUserHttp } from '../models/http-models/user-http.interface';

@Injectable()
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUserHttp> {
    return this.http.get<IUserHttp>(this.usersUrl);
  }
}
