import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { TogetherService } from '../../services/together/together.service';
declare var $: any;
@Component({
  selector: 'app-companyindex',
  templateUrl: './companyindex.component.html',
  styleUrls: ['./companyindex.component.css']
})
export class CompanyindexComponent implements OnInit {
  destination:string;
  startdate:string;
  constructor(
    private router:Router,
    private togetherservice:TogetherService,
    private us:UserService) { }
  companies:Array<any>=[];
  ngOnInit() {
    $(function(){
      $(".destination").mouseover(function(){
        $(this).css("overflow","visible").css("top","50%");
      });
      $(".destination").mouseout(function(){
        $(this).css("overflow","hidden").css("top","80%");
       
      }); 
      // $(".everyone").mouseover(function(){
      //     $(this).find(".each_content_bottom_img").css("background-position","-79px -79px");
      // });
      // $(".everyone").mouseout(function(){
      //   $(this).find(".each_content_bottom_img").css("background-position","0px -79px");
      // });
    });
    //日期选择器
    $("#datepicker").datepicker({
      dateFormat:"yy-mm-dd",
      onClose:(dataText)=>{
        console.log(dataText);
        this.startdate = dataText;
      }
    });
    this.findAlltogether();
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
  findAlltogether(){
    this.togetherservice.findAlltogether().subscribe( (data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.companies=result.data;
        // console.log(this.companies);
        // return;
        for(let i=0;i<this.companies.length;i++){
          let date = this.companies[i].startDate;
          let deadline = new Date(date);
          let nowDate = new Date();
          let time:number=deadline.getTime()-nowDate.getTime();
          let d = 0;
          d = time/1000/3600/24;
          d= Math.ceil(d);
          if(d<0){
            d=0;
          }
          this.companies[i]['day']= d;
          this.findJoinCount(this.companies[i]);
        }
      }
    });
  }
  // 按照条件查询
  search(){
    this.togetherservice.search(this.destination,this.startdate).subscribe((data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.companies=result.data;
        console.log(this.companies);
        return;
      }
    });
  }
  //已有多少人加入
  findJoinCount(obj:Object){
    this.togetherservice.findJoinCount(obj["tid"]).subscribe((data)=>{
      let result = data.json();
      if(result.code=="success"){
       obj["count"]=result.data.tc;
      //  console.log(result.data);
      //  console.log(result.data.tc);
        // console.log(obj);
        return;
      }
    });
  }
}
