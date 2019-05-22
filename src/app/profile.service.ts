import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api_url = 'https://api.randomuser.me/';

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get(this.api_url);
  }
}
