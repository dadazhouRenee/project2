import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.component.html',
  styleUrls: ['./tourdetail.component.css']
})
export class TourdetailComponent implements OnInit {

  constructor(private router :Router,private us:UserService) { }

  ngOnInit() {
  }
  toDoReplay(){
    this.us.checkLogin().subscribe((data)=>{
      let result = data.json();
      if(result.status){
        this.router.navigate(['/tourdetail']);
        return;
      }else{
        this.router.navigate(['/login']);
      }
    });
  }

}
