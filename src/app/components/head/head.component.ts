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
  quit(){
    this.us.quit().subscribe();
    this.userStatus=false;
    this.user = {};
    this.router.navigate(['/']);
  }

}
