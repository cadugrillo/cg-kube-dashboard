import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  //services!: KbServices;
  //displayedColumns: string[] = ['name', 'status', 'restarts', 'ip', 'node', 'startTime', 'namespace']

  constructor(private ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices() {
    this.ServicesService.getServices().subscribe((data) => {
      console.log(data);
      //this.services = (data as KbServices);
    });
  }

}
