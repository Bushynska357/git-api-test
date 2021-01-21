import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Favourite, UserService } from 'src/app/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-open-favourite-repos-dialog',
  templateUrl: './open-favourite-repos-dialog.component.html',
  styleUrls: ['./open-favourite-repos-dialog.component.scss']
})
export class OpenFavouriteReposDialogComponent implements OnInit {

  favourite:Favourite[]=[]
  constructor(private getUserService: UserService) { }

  ngOnInit(): void {
    this.favourite =this.getUserService.favouriteRepos
    console.log(this.favourite)
  }

}
