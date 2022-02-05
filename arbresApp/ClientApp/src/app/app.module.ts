import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListTreeComponent } from './list-tree/list-tree.component';
import { DetailsTreeComponent } from './details-tree/details-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTreeComponent,
    DetailsTreeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListTreeComponent, pathMatch: 'full' },
      { path: 'list-tree', component: ListTreeComponent },
      { path: 'details-tree/:id', component: DetailsTreeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
