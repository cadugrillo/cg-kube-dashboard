import { Component, OnInit } from '@angular/core';
import { NodesService, KbNodes } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  nodes!: KbNodes;
  displayedColumns: string[] = ['name', 'status', 'roles', 'ncpu', 'version', 'internal-ip', 'os-image', 'kernel-version'];

  constructor(private NodesService: NodesService) { }

  ngOnInit(): void {
    this.getNodes();
  }

  getNodes() {
    this.NodesService.getNodes().subscribe((data) => {
      console.log(data);
      this.nodes = (data as KbNodes);
    });
  }

}
