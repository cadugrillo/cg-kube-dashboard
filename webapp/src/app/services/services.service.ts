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

export class KbServices {
  items!: KbService[]
  metadata!: ResourceVersion
}

class ResourceVersion {
  resourceVersion!: string
}

export class KbService {
  metadata!: KbServiceMetadata
  spec!: KbServiceSpec
  status!: KbServiceStatus
}

class KbServiceMetadata {
  creationTimestamp!: string
  labels!: Map<string,string>
  managedFields!: ManagedField[]
  name!: string
  namespace!: string
  resourceVersion!: string
  uid!: string
}

class ManagedField {
  apiVersion!: string
  fieldsType!: string
  fieldsV1!: FieldsV1
  manager!: string
  operation!: string
  time!: string
}

class FieldsV1 {

}

class KbServiceSpec {
  clusterIP!: string
  clusterIPs!: string[]
  internalTrafficPolicy!: string
  ipFamilies!: string[]
  ipFamilyPolicy!: string
  ports!: Port[]
  sessionAffinity!: string
  type!: string
}

class Port {
  name!: string
  port!: number
  protocol!: string
  targetPort!: number
}

class KbServiceStatus {
  status!: Status
}

class Status {
  loadBalancer!: Ingress
}

class Ingress {
  ingress!: Ip
}

class Ip {
  ip!: string
}