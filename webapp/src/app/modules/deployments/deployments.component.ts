import { Component, OnInit } from '@angular/core';
import { DeploymentsService, KbDeployments,KbDeployment } from 'src/app/services/deployments.service';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {

  deployments!: KbDeployments;
  deployment!: KbDeployment;
  displayedColumns: string[] = ['name', 'ready', 'upToDate', 'available', 'startTime', 'containers', 'images', 'selector']

  constructor(private DeploymentsService: DeploymentsService) { }

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
