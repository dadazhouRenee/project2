import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService implements CanActivate{

  constructor(private us:UserService,private router:Router) { }
  canActivate(){
    //let falg = false;
    // 需要获取用户的登录状态
    //  checkedLogin.php  返回的对象中有一个 status  => boolean
    // 一但出现回调函数的写法，一定是异步操作
    // 异步操作不会阻断后续代码的执行
    // ES6 语法中 存在一个对象 Promise 用于处理异步请求的
    
    // this.us.checkedLogin().subscribe((data)=>{
    //   let result = data.json();
    //   // 在回调函数中 是没有办法将结果返回到最顶层
    //   falg = result.status;
    // });
    return new Promise<boolean>((resolved,rejected)=>{
      this.us.checkLogin().subscribe((data)=>{
        let result = data.json();
        if(!result.status){
          this.router.navigate(["/login"]);
        }
        resolved(result.status);
      });
    });


  }

}
