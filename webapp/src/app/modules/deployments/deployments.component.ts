import { Component, OnInit } from '@angular/core';
import { DeploymentsService, KbDeployments } from 'src/app/services/deployments.service';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {

  deployments!: KbDeployments;
  displayedColumns: string[] = ['name', 'ready', 'upToDate', 'available', 'startTime', 'containers', 'images', 'selector']

  constructor(private DeploymentsService: DeploymentsService) { }

  ngOnInit(): void {
    this.getPods();
  }

  getPods() {
    this.DeploymentsService.getDeployments().subscribe((data) => {
      console.log(data);
      this.deployments = (data as KbDeployments);
    });
  }

}
