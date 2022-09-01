import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CG-KUBE-DASHBOARD';

  openWebPage() {
    window.open('https://github.com/cadugrillo/cg-kube-dashboard', '_blank');
  }

}
