import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-companyindex',
  templateUrl: './companyindex.component.html',
  styleUrls: ['./companyindex.component.css']
})
export class CompanyindexComponent implements OnInit {

  constructor(private router:Router) { }

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
    this.router.navigate(['companydetail']);
  }
  toaddcompany(){
    this.router.navigate(['addcompany']);
  }

}
