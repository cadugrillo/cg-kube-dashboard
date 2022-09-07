import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentsComponent } from './modules/deployments/deployments.component';
import { NodesComponent } from './modules/nodes/nodes.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { PodsComponent } from './modules/pods/pods.component';

const routes: Routes = [

  { path: '', redirectTo: 'Deployments', pathMatch: 'full' },
  { path: 'Overview', component: OverviewComponent},
  { path: 'Deployments', component: DeploymentsComponent},
  { path: 'Nodes', component: NodesComponent},
  { path: 'Pods', component: PodsComponent},
  { path: '**', redirectTo: 'Deployments'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
