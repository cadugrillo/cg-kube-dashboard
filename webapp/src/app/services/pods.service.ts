import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PodsService {

  constructor(private httpClient: HttpClient) {}

  getPods() {
    return this.httpClient.get(environment.gateway + '/cg-kube-dashboard/pods/json');
  }
}
