import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NodesService, KbNodes, KbNode } from 'src/app/services/nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {

  nodes!: KbNodes;
  node!: KbNode;
  displayedColumns: string[] = ['name', 'status', 'roles', 'ncpu', 'version', 'internal-ip', 'os-image', 'kernel-version'];
  dataSource!: MatTableDataSource<KbNode>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private NodesService: NodesService) { }

  ngOnInit(): void {
    this.getNodes();
  }

  getNodes() {
    this.NodesService.getNodes().subscribe((data) => {
      console.log(data);
      this.nodes = (data as KbNodes);
      this.dataSource = new MatTableDataSource(this.nodes.items);
      this.dataSource.paginator = this.paginator;
    });
  }

}
