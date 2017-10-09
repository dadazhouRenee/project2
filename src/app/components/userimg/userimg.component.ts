import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FileUploader } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { User } from '../../extras/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-userimg',
  templateUrl: './userimg.component.html',
  styleUrls: ['./userimg.component.css']
})
export class UserimgComponent implements OnInit {

  constructor(private us:UserService) { }

  ngOnInit() {
  }
  @ViewChild("file") myUpload:ElementRef;
  imgUrl:string="assets/img/user.jpeg";
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
  //上传图片
  uploader:FileUploader = new FileUploader({
    url:"/tournote/fileUpload.php",
    method:"POST",
    itemAlias:"uploadedfile"
  });
  uploadImgFuntion(callback:Function){
    if(this.uploader.queue.length==0){
      console.log("没有待上传的文件");
      return;
    }
    let index = this.uploader.queue.length-1;
    this.uploader.queue[index].onSuccess = (response,status,headers)=>{
      if(status==200){
        callback(JSON.parse(response))
      }else{
        console.log("服务器不通，请稍后再试");
      }
    }
    this.uploader.queue[index].upload();
  }
  user:User =new User(null,"","");
  doUpload(){
   this.uploadImgFuntion((data)=>{
     this.user.userImg = data.imgUrl;
     this.us.updateimg(this.user).subscribe((data)=>{
      console.log(data.json());
     })
   });
  
  
  }
  
}
