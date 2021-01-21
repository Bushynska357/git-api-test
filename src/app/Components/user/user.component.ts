import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY, of, throwError } from 'rxjs';
import { User, UserService } from 'src/app/user.service';
import { catchError, filter, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = []
  login =''
  userSearch:User[] =[]
  user:any;
  username =''
  userCount$:any;
 

  constructor(public UserService: UserService, 
              private http:HttpClient,
              private route:ActivatedRoute ) {
              this.route.params.subscribe((params)=>{
                this.username = params.username
              })
              }

  ngOnInit() {
    this.userCount$ = this.getUserList();
  }

  getUserList(){
    return this.UserService.getListUsers()
    // .subscribe(users =>{
    //     console.log('Response', users)
    //     this.users = users
    //   })
    }

   
  searchUser(){
    this.userCount$ = this.UserService.getSearchUser(this.username)
    // .subscribe(users=>{
    //   this.users = users;
    //   console.log(this.users)
    // })
  };
    
}
