import { Component, OnInit } from '@angular/core';
import { IngressesService } from 'src/app/services/ingresses.service';

@Component({
  selector: 'app-ingresses',
  templateUrl: './ingresses.component.html',
  styleUrls: ['./ingresses.component.css']
})
export class IngressesComponent implements OnInit {

  //ingresses!: KbIngresses;
  //displayedColumns: string[] = ['name', 'status', 'restarts', 'ip', 'node', 'startTime', 'namespace']

  constructor(private IngressesService: IngressesService) { }

  ngOnInit(): void {
    this.getIngresses();
  }

  getIngresses() {
    this.IngressesService.getIngresses().subscribe((data) => {
      console.log(data);
      //this.ingresses = (data as KbIngresses);
    });
  }

}
