import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService, KbServices,KbService } from 'src/app/services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services!: KbServices;
  service!: KbService;
  displayedColumns: string[] = ['name', 'type', 'clusterIp', 'externalIp', 'ports', 'startTime', 'selector']
  dataSource!: MatTableDataSource<KbService>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.getServices();
  }


  getServices() {
    this.ServicesService.getServices().subscribe((data) => {
      console.log(data);
      this.services = (data as KbServices);
      this.dataSource = new MatTableDataSource(this.services.items);
      this.dataSource.paginator = this.paginator;
    });
  }

}
