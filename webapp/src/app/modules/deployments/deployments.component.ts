import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeploymentsService, KbDeployments,KbDeployment } from 'src/app/services/deployments.service';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit, AfterViewInit {

  deployments!: KbDeployments;
  deployment!: KbDeployment;
  displayedColumns: string[] = ['name', 'ready', 'upToDate', 'available', 'startTime', 'containers', 'images', 'selector'];
  dataSource = new MatTableDataSource(this.deployments.items);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private DeploymentsService: DeploymentsService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getDeployments();
  }

  getDeployments() {
    this.DeploymentsService.getDeployments().subscribe((data) => {
      console.log(data);
      this.deployments = (data as KbDeployments);
    });
  }

  getDeployment(DeploymentName: string) {
    this.DeploymentsService.getDeployment(DeploymentName).subscribe((data) => {
      console.log(data);
      this.deployment = (data as KbDeployment);
      console.log(this.deployment);
    });
  }

  updateDeployment(Deployment: KbDeployment) {
    this.DeploymentsService.updateDeployment(Deployment).subscribe((data) => {
      console.log(data);
    });
  }

}
