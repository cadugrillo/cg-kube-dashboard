import { Component, OnInit } from '@angular/core';
import { DeploymentsService } from 'src/app/services/deployments.service';

@Component({
  selector: 'app-deployments',
  templateUrl: './deployments.component.html',
  styleUrls: ['./deployments.component.css']
})
export class DeploymentsComponent implements OnInit {

  //pods!: KbDeployments;
  //displayedColumns: string[] = ['name', 'status', 'restarts', 'ip', 'node', 'startTime', 'namespace']

  constructor(private DeploymentsService: DeploymentsService) { }

  ngOnInit(): void {
    this.getPods();
  }

  getPods() {
    this.DeploymentsService.getDeployments().subscribe((data) => {
      console.log(data);
      //this.pods = (data as KbDeployments)
    });
  }

}
