import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeploymentsService {

  constructor(private httpClient: HttpClient) {}

  getDeployments() {
    return this.httpClient.get(environment.gateway + '/cg-kube-dashboard/deployments/json');
  }
}
