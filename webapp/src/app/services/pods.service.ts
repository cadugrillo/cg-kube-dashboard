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

export class KbPods {
  items!: KbPod[]
  metadata!: ResourceVersion
}

class ResourceVersion {
  resourceVersion!: string
}

class KbPod {
  metadata!: KbPodMetadata
  spec!: KbPodSpec
  status!: KbPodStatus
}

class KbPodMetadata {
  creationTimestamp!: string
  generateName!: string
  labels!: Map<string,string>
  managedFields!: ManagedField[]
  name!: string
  namespace!: string
  ownerReferences!: OwnerReference[]
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

class OwnerReference {
  apiVersion!: string
  blockOwnerDeletion!: boolean
  controller!: boolean
  kind!: string
  name!: string
  uid!: string
}

class KbPodSpec {
  containers!: Container[]
  dnsPolicy!: string
  enableServiceLinks!: boolean
  nodeName!: string
  preemptionPolicy!: string
  priority!: number
  restartPolicy!: string
  schedulerName!: string
  securityContext!: SecurityContext
  serviceAccount!: string
  serviceAccountName!: string
  terminationGracePeriodSeconds!: number
  tolerations!: Toleration[]
  volumes!: Volume[]

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

class VolumeMount {
  mountPath!: string
  name!: string
  readOnly!: boolean
}

class Toleration {
  effect!: string
  key!: string
  operator!: string
  tolerationSeconds!: number
}

class Volume {
  name!: string
  projected!: Projected
}

class Projected {
  defaultMode!: number
  sources!: Sources
}

class Sources {

}

class KbPodStatus {
  conditions!: Condition[]
  containerStatuses!: ContainerStatus[]
  hostIP!: string
  phase!: string
  podIP!: string
  podIPs!: PodIP[]
  qosClass!: string
  startTime!: string
}

class Condition {
  lastProbeTime!: null
  lastTransitionTime!: string
  status!: string
  type!: string
}

class ContainerStatus {
  containerID!: string
  image!: string
  imageID!: string
  //lastState!: string
  name!: string
  ready!: boolean
  restartCount!: number
  started!: boolean
  //state!: string
}

class PodIP {
  ip!: string
}