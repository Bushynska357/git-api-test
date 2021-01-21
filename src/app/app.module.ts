import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import { ReposComponent } from './Components/repos/repos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenInfoReposDialogComponent } from './Components/open-info-repos-dialog/open-info-repos-dialog.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { OpenFavouriteReposDialogComponent } from './Components/open-favourite-repos-dialog/open-favourite-repos-dialog.component';





@NgModule({
  entryComponents:[
    OpenInfoReposDialogComponent
  ],
  declarations: [
    AppComponent,
    UserComponent,
    ReposComponent,
    OpenInfoReposDialogComponent,
    OpenFavouriteReposDialogComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule
  
   ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
