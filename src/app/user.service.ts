import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface User{
  id:number;
  avatar_url:string;
  login:string;
  repos_url:string;
  html_url:string;
  username:string
}


export interface Repos{
  id:number;
  has_issues:string;
  language:string;
  name:any;
  description:any;
  html_url:string;
  login:string
}


export interface Favourite{
  id:number;
  has_issues:boolean;
  language:string;
  name:any;
  description:any;
  html_url:string;
  login:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  favouriteRepos:Favourite[]=[];
  userName:string = '';
  users: User[] = []
  // error$:Subject<string> = new Subject();
  message = " ";
  error = false

  constructor(private http:HttpClient) { }

  getListUsers(): Observable <User[]>{
    return this.http.get<User[]>('https://api.github.com/users')
  }


  getRepoList(username:any){
    return this.http.get<Repos[]>(`https://api.github.com/users/${username}/repos`)   
  }


  getSearchUser(username:any){
    return this.http.get<User[]>('https://api.github.com/users/' + username)
      .pipe(map((user) => [user]),
            catchError(error => {
                if (error.error instanceof ErrorEvent) {
                  this.error = true
                  this.message = `Error: ${error.error.message}`;
                  console.log(this.message, 'gcgc')
                } else {
                  this.error = true
                  this.message = `Error: ${error.error.message}`;
                  console.log(this.message)
                }
                return of([]);
            })
            ) 
  }


  addFavor(name:any){
    this.favouriteRepos.push(name)
    console.log(this.favouriteRepos)
  }

  
}
