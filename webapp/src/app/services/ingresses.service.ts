import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngressesService {

  constructor(private httpClient: HttpClient) {}

  getIngresses() {
    return this.httpClient.get(environment.gateway + '/cg-kube-dashboard/ingresses/json');
  }
}
