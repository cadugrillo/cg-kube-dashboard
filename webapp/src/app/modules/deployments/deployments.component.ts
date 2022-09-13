import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeploymentsService, KbDeployments,KbDeployment } from 'src/app/services/deployments.service';
import { PodsService } from 'src/app/services/pods.service';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {

  deployments!: KbDeployments;
  deployment!: KbDeployment;
  displayedColumns: string[] = ['name', 'ready', 'upToDate', 'available', 'startTime', 'containers', 'images', 'selector'];
  dataSource!: MatTableDataSource<KbDeployment>;
  testString: string = "This is a test String"

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private DeploymentsService: DeploymentsService) { }


  ngOnInit(): void {
    this.getDeployments();
  }

  getDeployments() {
    this.DeploymentsService.getDeployments().subscribe((data) => {
      //console.log(data);
      this.deployments = (data as KbDeployments);
      this.dataSource = new MatTableDataSource(this.deployments.items);
      this.dataSource.paginator = this.paginator;
    });
  }

  getDeployment(DeploymentName: string) {
    this.DeploymentsService.getDeployment(DeploymentName).subscribe((data) => {
      //console.log(data);
      this.deployment = (data as KbDeployment);
    });
  }

  updateDeployment(Deployment: KbDeployment) {
    this.DeploymentsService.updateDeployment(Deployment).subscribe((data) => {
      console.log(data);
    });
  }
}
