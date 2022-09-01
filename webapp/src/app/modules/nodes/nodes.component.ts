import { Component, OnInit } from '@angular/core';
import { NodesService } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  constructor(private NodesService: NodesService) { }

  ngOnInit(): void {
    this.getNodes();
  }

  getNodes() {
    this.NodesService.getNodes().subscribe((data) => {
      console.log(data);
    });
  }

}
