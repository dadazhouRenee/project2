import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
declare var Swiper:any;
@Component({
  selector: 'app-tourindex',
  templateUrl: './tourindex.component.html',
  styleUrls: ['./tourindex.component.css']
})
export class TourindexComponent implements OnInit {

  constructor(private router :Router) { }

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
    this.router.navigate(['/addtour']);
  }
  toTourDetail(){
    this.router.navigate(['/tourdetail']);    
  }
}
