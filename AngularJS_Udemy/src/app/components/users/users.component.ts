import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean=true;
  loaded: boolean = false;
  enableAddUser: boolean = true;
  

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.users=[{
      firstName : 'John',
      lastName:'Doe',
      age:40,
      address : {
        street:'113 Atsion Way',
        city:'Chesterfield',
        state:'NJ'
      },
     
      isActive: true,
      hide: true,
     
      registered : new Date("01/02/2018 08:30:00")
    } ,

    {
      firstName : 'Kevin',
      lastName:'Johnson',
      age:35,
      address : {
        street:'23 Main street',
        city:'Bensalem',
        state:'PA'
      },
   
      isActive: false,
      hide: true,
   
      registered : new Date("01/05/2018 05:30:00")
    } ,

    {
      firstName : 'Karen',
      lastName:'Doe',
      age:50,
      address : {
        street:'55 Mill street',
        city:'Miami',
        state:'FL'
      },
   
      isActive: true,
      hide : true,
   
      registered : new Date("08/09/32017 06:30:00")
    } 

    ];

    this.loaded=true;

    },2000);
    

   
   
  }

  addUser (user: User){
    this.users.push(user);
  }

  fireEvent(e){
    console.log(e);
  }

}
