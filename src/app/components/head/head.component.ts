import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private us:UserService,private router:Router) { }
  userStatus:boolean=false;
  user:object = {};
  ngOnInit() {
    this.us.checkLogin().subscribe((data)=>{
      let result = data.json();
      this.userStatus = result.status;
      if(result.status){
        this.user = result.user;
        return;
      }
      this.user = {};
    });
  }
  //一定要有返回值  这个在项目bulid前要删掉
  addUrl(url:string){
    // console.log(url);
    if(url===undefined){
      return "";
    }
    return "http://127.0.0.1/tournote/img/"+url;
  }
  quit(){
    this.us.quit().subscribe();
    // this.router.navigate[('/tourindex')];
    this.userStatus=false;
    this.user = {};
  }

}
