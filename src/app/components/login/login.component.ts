import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,public us:UserService) { }

  ngOnInit() {
  }
  telphone:string="";
  password:string="";
  msg:string;
  msg1:string;
  msg2:string;
  isshow:boolean=false;
  ispassword:boolean=false;
  isphone:boolean=false;

  toIndex(){
    this.us.login(this.telphone,this.password).subscribe((data)=>{
      let result = data.json();
      this.msg = result.msg;
      console.log(this.msg,result.code);
      if(result.code=="success"){
        this.router.navigate(['/tourindex']);
      }
      if(result.code=="error1"){
        this.isphone=!this.isphone;
        this.msg1=this.msg;
        return;
      }
      if(result.code=="error2"){
        this.isphone=!this.isphone;
        this.msg1=this.msg;
        return;
      }
      if(result.code=="error3"){
        this.ispassword=!this.ispassword;
        this.msg2=this.msg;
        return;
      }
    });
  }
}
