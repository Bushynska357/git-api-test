import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Favourite, Repos, UserService } from 'src/app/user.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OpenInfoReposDialogComponent } from '../open-info-repos-dialog/open-info-repos-dialog.component';
import { stringify } from '@angular/compiler/src/util';
import { from } from 'rxjs';
import { OpenFavouriteReposDialogComponent } from '../open-favourite-repos-dialog/open-favourite-repos-dialog.component';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  repos: Repos[] = []
  username ='';
  favourite: Favourite []=[];
  faStar = faStar;
  isAddToFavourite = false;
  fillColor = 'rgb(255, 0, 0)';
 

  constructor(public route:ActivatedRoute,
              public dialog: MatDialog,
              private getUserService: UserService,
              private http:HttpClient) {
                this.route.params.subscribe(
                  (params) =>{
                    this.username = params.username;
                   
                    console.log(params,this.username,'iy',)
                  }
                )
               }

  ngOnInit() {
      this.getUserService.getRepoList(this.username)
     .subscribe(repos =>{
      this.repos = repos
      console.log(this.repos)
    })  
  }



  addToFavouriteRepo(name:any) {
     this.isAddToFavourite = true;
     this.getUserService.addFavor(name);
 
  }


  removeRepos(id:number){
    this.repos = this.repos.filter(repo => repo.id !== id);
        
    }


    openInfoReposDialog(name:any,has_issues:string,language:string,html_url:string){
      const dialogRef = this.dialog.open(OpenInfoReposDialogComponent,{
        data: {name,
          has_issues,
          language,
          html_url},
        width:"500px",
      })
    }


      
    listOfFavourite(event:Event){
      console.log(event)
     const dialogRefFavor = this.dialog.open(OpenFavouriteReposDialogComponent,{
        width:"500px",
      })
      
    }


    // listOfFavourite(event:any){
    //   this.favourite = favourite;
    //   const dialogRefFavor = this.dialog.open(OpenFavouriteReposDialogComponent,{
    //     data:this.favourite,
    //     width:"500px",
    //   })
    // }


}
