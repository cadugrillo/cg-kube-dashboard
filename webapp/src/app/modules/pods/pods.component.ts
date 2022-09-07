import { Component, OnInit } from '@angular/core';
import { PodsService, KbPods } from 'src/app/services/pods.service';

@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.css']
})
export class PodsComponent implements OnInit {

  pods!: KbPods;
  displayedColumns: string[] = ['name', 'status', 'restarts', 'ip', 'node', 'startTime', 'namespace']

  constructor(private PodsService: PodsService) { }

  ngOnInit(): void {
    this.getPods();
  }

  getPods() {
    this.PodsService.getPods().subscribe((data) => {
      console.log(data);
      this.pods = (data as KbPods)
    });
  }

}
