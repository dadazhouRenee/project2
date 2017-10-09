import { Injectable } from '@angular/core';
import { Together } from '../../extras/together';
import { Http,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TogetherJoin } from '../../extras/togetherJoin';

@Injectable()
export class TogetherService {

  constructor(private http:Http) { }
  
  public add(together:Together):Observable<any>{
    let params = new URLSearchParams();
    params.append("title",together.title);
    params.append("tel",together.tel);
    params.append("qq",together.qq);
    params.append("weixin",together.weixin);
    params.append("toCity",together.toCity);
    params.append("fromCity",together.fromCity);
    params.append("startDate",together.startDate);
    params.append("lastDays",together.lastDays);
    params.append("limitNum",together.limitNum);
    params.append("intro",together.intro);
    params.append("coverImg",together.coverImg);
    return this.http.post("/tournote/addCompany.php",params);
  }
  public findAlltogether():Observable<any>{
    return this.http.get("/tournote/findAlltogether.php");
  }
  public findTogetherById(id:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tid",id);
    return this.http.post("/tournote/findTogetherById.php",params);
  }
  public joinIn(togetherJoin:TogetherJoin):Observable<any>{
    let params = new URLSearchParams();
    params.append("tid",togetherJoin.tid);
    params.append("male",togetherJoin.male);
    params.append("number",togetherJoin.number);
    params.append("tel",togetherJoin.tel);
    params.append("female",togetherJoin.female);
    return this.http.post("/tournote/togetherJoin.php",params);
  }
  public findJoin(tid:string):Observable<any>{
    let params=new URLSearchParams();
    params.append("tid",tid);
    return this.http.post("/tournote/findJoin.php",params);
  }
  public search(destination:string,startdate:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("destination",destination);
    params.append("startdate",startdate);
    return this.http.post("/tournote/searchTogether.php",params);
  }
  public findJoinCount(tid:string):Observable<any>{
    let params=new URLSearchParams();
    params.append("tid",tid);
    return this.http.post("/tournote/findJoinCount.php",params);
  }
}
