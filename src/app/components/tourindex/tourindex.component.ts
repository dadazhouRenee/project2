import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
declare var $: any;
declare var Swiper:any;
@Component({
  selector: 'app-tourindex',
  templateUrl: './tourindex.component.html',
  styleUrls: ['./tourindex.component.css']
})
export class TourindexComponent implements OnInit {

  constructor(private router :Router,private us:UserService) { }

  ngOnInit() {
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
  toTourDetail(){
    this.router.navigate(['/tourdetail']);    
  }
}
