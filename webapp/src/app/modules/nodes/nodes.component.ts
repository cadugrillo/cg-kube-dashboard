import { Component, OnInit } from '@angular/core';
import { NodesService, KbNodes } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  nodes!: KbNodes;

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
