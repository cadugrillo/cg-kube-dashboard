import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpClient: HttpClient) {}

  getServices() {
    return this.httpClient.get(environment.gateway + '/cg-kube-dashboard/services/json');
  }
}
