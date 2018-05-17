import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';
//import Of as an operator
import { of } from 'rxjs/observable/of';


@Injectable()
export class DataService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users=[{
      firstName : 'John',
      lastName:'Doe',
      age:40,
      email : '',
     
      isActive: true,
      hide: true,
     
      registered : new Date("01/02/2018 08:30:00")
    } ,
  
    {
      firstName : 'Kevin',
      lastName:'Johnson',
      age:35,
       email : 'kkk@a.com',
   
      isActive: false,
      hide: true,
   
      registered : new Date("01/05/2018 05:30:00")
    } ,
  
    {
      firstName : 'Karen',
      lastName:'Doe',
      age:50,
      email : 'a@b.com',
   
      isActive: true,
      hide : true,
   
      registered : new Date("08/09/32017 06:30:00")
    } 
  
    ];


  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }
  
  addUser(user:User){
    this.users.unshift(user);
  }

  getData(){
    this.data = new Observable(observer => {
      setTimeout(()=>{
        observer.next(1);
      },1000);

      setTimeout(()=>{
        observer.next(2);
      }, 2000);
      

      setTimeout(()=>{
        observer.next(3);
      }, 3000);

      setTimeout(()=>{
        observer.next(4);
      }, 4000);

    });
    return this.data;
  }
  
}
