import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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
  
}
