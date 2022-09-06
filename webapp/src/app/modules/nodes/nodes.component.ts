import { Component, OnInit } from '@angular/core';
import { NodesService, KbNodes } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  nodes!: KbNodes;
  displayedColumns: string[] = ['name', 'status', 'roles', 'age', 'version', 'internal-ip', 'os-image', 'kernel-version'];
  dataSource = ELEMENT_DATA.items;

  constructor(private NodesService: NodesService) { }

  ngOnInit(): void {
    this.getNodes();
  }

  getNodes() {
    this.NodesService.getNodes().subscribe((data) => {
      console.log(data);
      this.nodes = (data as KbNodes);
      console.log(this.nodes.items[0].metadata.name);
      console.log(this.nodes.items[0].metadata.annotations);
    });
  }

}

const ELEMENT_DATA: KbNodes = {
  items:
  [
    {metadata: {
                annotations: new Map([['hostname', 'Master']]),
                creationTimestamp: '',
                finalizers: [],
                labels: new Map([['beta.kubernetes.io/arch', 'Amd64']]),
                managedFields: [],
                name: 'ip-172-31-23-48',
                resourceVersion: '',
                uid: ''
              },
    spec: {
           podCIDR: ',',
           podCIDRs: [],
           providerID: ''
          },
    status
    },
    {metadata: {
                annotations: new Map([["hostname", "Worker1"]]),
                creationTimestamp: '',
                finalizers: [],
                labels: new Map([['beta.kubernetes.io/arch', 'Amd64']]),
                managedFields: [],
                name: 'ip-172-31-23-49',
                resourceVersion: '',
                uid: ''
              },
    spec: {
            podCIDR: ',',
            podCIDRs: [],
            providerID: ''
          },
    status
    },
    {metadata: {
                annotations: new Map([['hostname', 'Worker2']]),
                creationTimestamp: '',
                finalizers: [],
                labels: new Map([['beta.kubernetes.io/arch', 'Amd64']]),
                managedFields: [],
                name: 'ip-172-31-23-50',
                resourceVersion: '',
                uid: ''
               },
    spec: {
           podCIDR: ',',
           podCIDRs: [],
           providerID: ''
          },
    status
    }
  ],
  metadata: {resourceVersion: 'testing version'}
};
