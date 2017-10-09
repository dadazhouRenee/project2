import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../extras/user';
import { changePassword } from '../../extras/changePassword';

@Injectable()
export class UserService {

  constructor(private http:Http) { }
  public regist(tel:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tel",tel);
    return this.http.post("/tournote/regist.php",params);
  }
  public login(tel:string,password:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("telPhone",tel);
    params.append("password",password);
    return this.http.post("/tournote/login.php",params);
  }
  public checkLogin():Observable<any>{
    return this.http.get("/tournote/checkLogin.php")
  }
  public quit():Observable<any>{
    return this.http.get("/tournote/quit.php")
  }
  public updateimg(user:User):Observable<any>{
    let params = new URLSearchParams();
    params.append("userImg",user.userImg);
    return this.http.post("/tournote/updateimg.php",params);
  }
  public updateName(user:User):Observable<any>{
    let params = new URLSearchParams();
    params.append("nikeName",user.nikeName);
    return this.http.post("/tournote/updateName.php",params);
  }
  public getAuthcode():Observable<any>{
    return this.http.get("/tournote/getAuthcode.php");
  }
  public changePassword(changepassword:changePassword):Observable<any>{
    let params = new URLSearchParams();
    params.append("password",changepassword.password);
    params.append("repassword",changepassword.repassword);
    return this.http.post("/tournote/changePassword.php",params);
  }
}
