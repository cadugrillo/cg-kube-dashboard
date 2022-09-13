import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PodsService, KbPods, KbPod } from 'src/app/services/pods.service';

@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.css']
})
export class PodsComponent implements OnInit {

  pods!: KbPods;
  pod!: KbPod;
  logs!: string
  displayedColumns: string[] = ['name', 'status', 'restarts', 'ip', 'node', 'startTime', 'namespace']
  dataSource!: MatTableDataSource<KbPod>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private PodsService: PodsService) { }


  ngOnInit(): void {
    this.getPods();
  }

  getPods() {
    this.PodsService.getPods().subscribe((data) => {
      console.log(data);
      this.pods = (data as KbPods);
      this.dataSource = new MatTableDataSource(this.pods.items);
      this.dataSource.paginator = this.paginator;
    });
  }

  getPod(PodName: string) {
    this.PodsService.getPod(PodName).subscribe((data) => {
      console.log(data);
      this.pod = (data as KbPod);
    });
  }

  getLogs(podName: string, containerName: string) {
    this.PodsService.getPodLogs(podName, containerName).subscribe((data) => {
      console.log(data);
      this.logs = (data as string);
    });
  }
}
