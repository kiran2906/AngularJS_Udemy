import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
  firstName: '',
  lastName: '',
  age : null,
  email : ''
  }
  users: User[];
  showExtended: boolean=true;
  loaded: boolean = false;
  enableAddUser: boolean = false;
  showUsersForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;


  constructor(private dataService:DataService) {
    }

  ngOnInit(){

  this.dataService.getData().subscribe(data => {
    console.log(data);
  });

    this.dataService.getUsers().subscribe(users=>{
      this.users = users;
      this.loaded = true;
    });
    
  }

  addUser (){
    this.users.unshift(this.user);
    this.user.isActive = true;
    this.user.registered = new Date();

    this.user = {
      firstName: '',
      lastName: '',
      age : null,
      email : ''
    }
    
  }


  onSubmit({value,valid} :{value:User, valid:Boolean}){
    if(!valid)
    {
      console.log("This form is not valid");
    }
    else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);
      this.form.reset();

    }
    
  }

}
