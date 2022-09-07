import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  constructor(private httpClient: HttpClient) {}

  getNodes() {
    return this.httpClient.get(environment.gateway + '/cg-kube-dashboard/nodes/json');
  }
}

export class KbNodes {
  items!: KbNode[]
  metadata!: ResourceVersion
}

class ResourceVersion {
  resourceVersion!: string
}

class KbNode {
  metadata!: KbNodeMetadata
  spec!: KbNodeSpec
  status!: KbNodeStatus
}

class KbNodeMetadata {
  annotations!: Map<string,string>
  creationTimestamp!: string
  finalizers!: string[]
  labels!: Map<string,string>
  managedFields!: ManagedField[]
  name!: string
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

class KbNodeSpec {
  podCIDR!: string
  podCIDRs!: string[]
  providerID!: string
}

class KbNodeStatus {
  
}