import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TogetherService } from '../../services/together/together.service';
import { Together } from '../../extras/together';
import { TogetherJoin } from '../../extras/togetherJoin';

@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.css']
})
export class CompanydetailComponent implements OnInit {
  tid:string="";
  number:string="";
  tel:string="";
  male:string="";
  female:string="";
  together:Together=new Together("","","","","","","","","","","",[]);
  join:Array<any>=[];
  count:number=0;
  constructor(
    private router :Router,
    private us:UserService,
    private togetherservice:TogetherService,
    public ar:ActivatedRoute
  ) { }

  ngOnInit() {
    let tid = this.ar.snapshot.params['tid'];
    this.findTogetherById(tid);
    this.tid = tid;
    this.findJoin(tid);
  }
  findTogetherById(tid:string){
    this.togetherservice.findTogetherById(tid).subscribe((data)=>{
      let result=data.json();
      if(result.code=="success"){
        this.together = result.data;
        return;
      }
    });
  }
  doapply(){
    console.log("------");
    let togetherJoin = new TogetherJoin(this.tid,this.number,this.tel,this.male,this.female);
    this.togetherservice.joinIn(togetherJoin).subscribe( (data)=>{
      let result =data.json();
      if(result.code=="success"){
        console.log(1);
        // // window.location.reload();
        this.findJoin(this.tid);
        return;
      }
    });
  }
  findJoin(tid:string){
    let that = this;
    this.togetherservice.findJoin(tid).subscribe((data)=>{
      let result=data.json();
      if(result.code=="success"){
        this.findTogetherById(tid);
        this.join=result.data;
        that.count=this.join.length;
        return;
      }
    });
  }

}

