import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Repos, User, UserService } from 'src/app/user.service';

@Component({
  selector: 'app-open-info-repos-dialog',
  templateUrl: './open-info-repos-dialog.component.html',
  styleUrls: ['./open-info-repos-dialog.component.scss']
})
export class OpenInfoReposDialogComponent implements OnInit {
 
  username:User[]=[];

  constructor(public dialogRef: MatDialogRef<OpenInfoReposDialogComponent>,
    private getUserService: UserService,
    public route:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: {has_issues:string,language:string,name:any,html_url:string}
              ) {}

  ngOnInit(): void {
    
    // this.getUserService.getRepoList(this.username);


  }

}
