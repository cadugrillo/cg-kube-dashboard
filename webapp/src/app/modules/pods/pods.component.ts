import { Component, OnInit } from '@angular/core';
import { PodsService } from 'src/app/services/pods.service';

@Component({
  selector: 'app-pods',
  templateUrl: './pods.component.html',
  styleUrls: ['./pods.component.css']
})
export class PodsComponent implements OnInit {

  constructor(private PodsService: PodsService) { }

  ngOnInit(): void {
    this.getPods();
  }

  getPods() {
    this.PodsService.getPods().subscribe((data) => {
      console.log(data);
    });
  }

}
