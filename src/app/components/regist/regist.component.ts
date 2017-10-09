import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

  constructor( public us:UserService) { }

  ngOnInit() {
  }
  userTel:string = '';
  msg:string = '';
  styleClass:string = '';  
  isShow:boolean=true ;
  password:string;
  doRegist(){
    this.us.regist(this.userTel).subscribe((data)=>{
      let result = data.json();
      this.msg = result.msg;
      this.password=result.code=="success" ? `您的密码是${result.password}`: "";
      this.styleClass = result.code=="success"?"success":"error";
    });
  }
  doClear(){
    this.isShow=!this.isShow;
  }

}
