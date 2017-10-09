import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { TournoteService } from '../../services/tournote/tournote.service';
declare var $: any;
declare var Swiper:any;
@Component({
  selector: 'app-tourindex',
  templateUrl: './tourindex.component.html',
  styleUrls: ['./tourindex.component.css']
})
export class TourindexComponent implements OnInit {

  constructor(private router :Router,private us:UserService,private ts:TournoteService) { }
  tours:Array<any> =[];
  ngOnInit() {
    //轮播图开始
    var swiper=new Swiper(".swiper-container",{
			loop:true,
      autoplay:3000,
      loopedSlides:4,
      keyboardControl:true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      paginationBulletRender: function (swiper, index, className) {
          return '<span class="' + className + '">' +'<img src="assets/img/swiperImg/show0'+(index + 1)+'.jpeg">' + '</span>';
      }
    });
    //轮播图结束
    //查询所有游记
    this.findAllTour();   
  }
  //查询
  findAllTour(){
    this.ts.findByAllTour().subscribe( (data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.tours = result.data;
        return;
      }
      console.log("查询失败");
    });
  }
  toAddTour(){
    this.us.checkLogin().subscribe((data)=>{
      let result = data.json();
      if(result.status){
        this.router.navigate(['/addtour']);
        return;
      }else{
        this.router.navigate(['/login']);
      }
    });
    
  }
}
