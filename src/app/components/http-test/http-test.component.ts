import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  getData: string;
  postData: string;
  description : string;
  constructor(private httpClient:HttpClient) {

    this.getData = 'test';
    this.postData = 'test Post Data'; 

  }
  ngOnInit() {
  }

  onNameKeyUp(event:any){
    this.getData=event.target.value;
  }

  getTriData(){
    //this.httpClient.get("../oslc/login?USERNAME=kiran&PASSWORD=password")
    //.subscribe((data:Object)=>{console.log(data)});

    this.httpClient.get("../oslc/so/oslcrecord/129206137")
    .subscribe(
      (res:Object[])=>{
        console.log(typeof res);
        this.getData=(res["spi:triNameTX"]);
        
        
      
        
        
      }
    )
  }

}
