import { Injectable } from '@angular/core';
import { Http,URLSearchParams } from '@angular/http';
import { Tour } from '../../extras/tour';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TournoteService {

  constructor(private http:Http) { }
  publish(tour:Tour):Observable<any>{
    let params = new URLSearchParams();
    params.append("title",tour.title);
    params.append("type",tour.type);
    params.append("content",tour.content);
    params.append("contentImg",tour.contentImg);
    return this.http.post("/tournote/addTour.php",params)
  }
}
