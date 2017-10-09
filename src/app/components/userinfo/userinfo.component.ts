import { Component, OnInit } from '@angular/core';
import { changePassword } from '../../extras/changePassword';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  changepassword:changePassword=new changePassword("","","","");
  constructor(public us:UserService,public router:Router) { }

  ngOnInit() {
  }
  //获取验证码
  getAuthcode(){
    this.us.getAuthcode().subscribe((data)=>{
      let result = data.json();
      this.changepassword.authcode=result.data;
      alert(result.data);
    });
  }
  //修改密码
  doChange(){
    if(this.changepassword.writecode==this.changepassword.authcode){
      this.us.changePassword(this.changepassword).subscribe((data)=>{
        let result=data.json();
        console.log(result);
        alert("请重新登陆！");
        this.router.navigate(['/login']);
      });
    }else{
      alert("验证码填写不正确！");
    }
  }

}
