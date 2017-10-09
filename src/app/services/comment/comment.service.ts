import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import { CommentObject } from '../../extras/CommentObject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {

  constructor(private http:Http) { }
  public addComment(ct:CommentObject):Observable<any>{
    let params = new URLSearchParams();
    params.append("content",ct.content);
    params.append("tid",ct.tid);
    return this.http.post("/tournote/addComment.php",params);
  }
  public findCommentByTourId(tid:string):Observable<any>{
    let params = new URLSearchParams();
    params.append("tid",tid);
    return this.http.post("/tournote/findCommentById.php",params)
  }
}
