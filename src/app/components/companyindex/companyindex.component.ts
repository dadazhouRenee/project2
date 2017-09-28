import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
declare var $: any;
@Component({
  selector: 'app-companyindex',
  templateUrl: './companyindex.component.html',
  styleUrls: ['./companyindex.component.css']
})
export class CompanyindexComponent implements OnInit {

  constructor(private router:Router,private us:UserService) { }

  ngOnInit() {
    $(function(){
      $(".destination").mouseover(function(){
        $(this).css("overflow","visible").css("top","50%");
      });
      $(".destination").mouseout(function(){
        $(this).css("overflow","hidden").css("top","80%");
       
      }); 
      $(".everyone").mouseover(function(){
          $(this).find(".each_content_bottom_img").css("background-position","-79px -79px");
      });
      $(".everyone").mouseout(function(){
        $(this).find(".each_content_bottom_img").css("background-position","0px -79px");
      });
    });
  }

  toCompanyDetail(){
    this.us.checkLogin().subscribe((data)=>{
      let result = data.json();
      if(result.status){
        this.router.navigate(['companydetail']);
        return;
      }else{
        this.router.navigate(['/login']);
      }
    });
  }
  toaddcompany(){
    this.us.checkLogin().subscribe((data)=>{
      let result = data.json();
      if(result.status){
        this.router.navigate(['addcompany']);
        return;
      }else{
        this.router.navigate(['/login']);
      }
    });
  }

}
