import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TournoteService } from '../../services/tournote/tournote.service';
import { Tour } from '../../extras/tour';
import { CommentObject } from '../../extras/CommentObject';
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-tourdetail',
  templateUrl: './tourdetail.component.html',
  styleUrls: ['./tourdetail.component.css']
})
export class TourdetailComponent implements OnInit {
  tour:Tour = new Tour(null,"","","","","","","");
  comments:Array<any> = [];
  tid:string="";
  context:string = "";
  constructor(
    private router :Router,
    private us:UserService,
    private ts:TournoteService,
    private cs:CommentService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    // 文章详情的查询  依赖于 文章的ID
    //此tid是rest传参传过来的tour的id
    let tid = this.activatedRoute.snapshot.params["tid"];
    //查询游记
    this.findById(tid);
    //此tid是rest传参传过来的tour的id
    this.findCommentByTid(tid);
    //这里的this的tid 是上面定义的属性中的tid 即tid:string=""; 
    this.tid = tid;
  }
  //根据tid查询每个游记的详情
  findById(tid:string){
    this.ts.findNoteDetailById(tid).subscribe( (data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.tour = result.data;
      }
    });
  }
  addComment(){
    this.us.checkLogin().subscribe((data)=>{
      let result = data.json();
      if(result.status){
        let commentObj = new CommentObject(this.context,this.tid,"","","");
        this.cs.addComment(commentObj).subscribe( (data)=>{
          let result = data.json();
          if(result.code=="success"){
            this.findCommentByTid(this.tid);
            return;
          }
          alert(result.msg);
        });
        return;
      }else{
        this.router.navigate(['/login']);
      }
    });

    

  }
  findCommentByTid(tid:string){
    this.cs.findCommentByTourId(tid).subscribe( (data)=>{
      let result = data.json();
      if(result.code=="success"){
        this.comments = result.data;
        console.log(this.comments);
        return;
      }
    });
  }

}
