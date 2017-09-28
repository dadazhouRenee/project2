import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { UEditorComponent } from '_ngx-ueditor@1.0.7@ngx-ueditor';
import { Tour } from '../../extras/tour';
import { TournoteService } from '../../services/tournote/tournote.service';

@Component({
  selector: 'app-addtour',
  templateUrl: './addtour.component.html',
  styleUrls: ['./addtour.component.css']
})
export class AddtourComponent implements OnInit {

  uploader:FileUploader = new FileUploader({
    // 上传地址
    url:"/tournote/fileUpload.php",
    // 请求类型
    method:"POST",
    // 配置项没有没有用的
    // 上传时的文件key
    itemAlias:"uploadedfile"
  });

  constructor(private ts :TournoteService) { }

  ngOnInit() {
   
  }
  
  imgUrl:string="assets/img/page_default.jpg";
  // 选择文件
  @ViewChild("file") myUpload:ElementRef;
  clickFile(){
    this.myUpload.nativeElement.click();
  }
  selectFile(event:any){
    let that = this;
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function(){
      that.imgUrl = this.result;
    }
  }
  //ue操作
  @ViewChild("ue") ue:UEditorComponent;
  uploadImgFunction(callback:Function){
    if(this.uploader.queue.length==0){
      console.log("没有待上传的文件");
      return;
    }
    let index = this.uploader.queue.length-1;
    this.uploader.queue[index].onSuccess =(response,status,headers)=>{
      if(status==200){
        callback(JSON.parse(response));
      }else{
        console.log("服务器不通，请稍后再试");
      }
    }
    this.uploader.queue[index].upload();
  }
  //上传函数的封装end
  tour:Tour = new Tour(null,"","","","","","","");
  getContent(){
    console.log(this.ue.Instance.getContent());
    console.log(this.tour.title);
    console.log(this.tour.type);
    this.tour.content = this.ue.Instance.getContent();
    this.uploadImgFunction((data)=>{
      this.tour.contentImg = data.imgUrl;
      console.log(this.tour.contentImg);
      this.ts.publish(this.tour).subscribe((data)=>{
        console.log(data.json);
      })
    });
  }
}
