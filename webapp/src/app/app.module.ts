import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { SidePanelContentComponent } from './navigation/side-panel-content/side-panel-content.component';
import { SidePanelComponent } from './navigation/side-panel/side-panel.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { NodesComponent } from './modules/nodes/nodes.component';
import { PodsComponent } from './modules/pods/pods.component';
import { NodesService } from './services/nodes.service';
import { PodsService } from './services/pods.service';
import { DeploymentsService } from './services/deployments.service';
import { DeploymentsComponent } from './modules/deployments/deployments.component';
import { ServicesService } from './services/services.service';
import { IngressesService } from './services/ingresses.service';
import { ServicesComponent } from './modules/services/services.component';
import { IngressesComponent } from './modules/ingresses/ingresses.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelContentComponent,
    SidePanelComponent,
    OverviewComponent,
    NodesComponent,
    PodsComponent,
    DeploymentsComponent,
    ServicesComponent,
    IngressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule
    
  ],
  providers: [NodesService, PodsService, DeploymentsService, ServicesService,
  IngressesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
