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

  getDeployment(DeploymentName: string) {
    return this.httpClient.get(environment.gateway + '/cg-kube-dashboard/deployments/' + DeploymentName);
  }

  updateDeployment(Deployment: KbDeployment) {
    return this.httpClient.post(environment.gateway + '/cg-kube-dashboard/deployments/update', Deployment);
  }
}

export class KbDeployments {
  items!: KbDeployment[]
  metadata!: ResourceVersion
}

class ResourceVersion {
  resourceVersion!: string
}

export class KbDeployment {
  metadata!: KbDeploymentMetadata
  spec!: KbDeploymentSpec
  status!: KbDeploymentStatus
}

class KbDeploymentMetadata {
  annotations!: Map<string,string>
  creationTimestamp!: string
  generation!: number
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

class KbDeploymentSpec {
  progressDeadlineSeconds!: number
  replicas!: number
  revisionHistoryLimit!: number
  selector!: Selector
  strategy!: Strategy
  template!: Template
}

class Selector {
  matchLabels!: Map<string,string>
}

class Strategy {
  rollingUpdate!: Map<string,string>
  type!: string
}

class Template {
  metadata!: TemplateMetadata
  spec!: TemplateSpec
}

class TemplateMetadata {
  creationTimestamp!: null
  labels!: Map<string,string>
}

class TemplateSpec {
  containers!: Container[]
  dnsPolicy!: string
  restartPolicy!: string
  schedulerName!: string
  securityContext!: SecurityContext
  serviceAccount!: string
  serviceAccountName!: string
  terminationGracePeriodSeconds!: number
  volumes!: Volume[]
}

class Volume {
  configMap!: ConfigMap
  name!: string
}

class ConfigMap {
  defaultMode!: number
  items!: ConfigMapItem[]
  name!: string
}

class ConfigMapItem {
  key!: string
  path!: string
}

class SecurityContext {

}

class Container {
  env!: Env[]
  image!: string
  imagePullPolicy!: string
  name!: string
  ports!: Port[]
  resources!: Resource[]
  terminationMessagePath!: string
  terminationMessagePolicy!: string
  volumeMounts!: VolumeMount[]
}

class VolumeMount {
  mountPath!: string
  name!: string
}

class Env {
  name!: string
  value!: string
}

class Port {
  containerPort!: number
  protocol!: string
}

class Resource {

}

class KbDeploymentStatus {
  availableReplicas!: number
  conditions!: Condition[]
  observedGeneration!: number
  readyReplicas!: number
  replicas!: number
  updatedReplicas!: number
}

class Condition {
  lastTransitionTime!: string
  lastUpdateTime!: string
  message!: string
  reason!: string
  status!: string
  type!: string
}