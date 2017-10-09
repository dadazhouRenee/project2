import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FileUploader } from '_ng2-file-upload@1.2.1@ng2-file-upload';
import { Together } from '../../extras/together';
import { TogetherService } from '../../services/together/together.service';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {
  @ViewChild("file") myUpload:ElementRef;
  uploader:FileUploader = new FileUploader({
    url:"/tournote/fileUpload.php",
    method:"POST",
    itemAlias:"uploadedfile"
  });
  imgUrl:string="assets/img/add.png";
  together:Together=new Together("","","","","","","","","","","",[]);
  constructor(
    private togetherservice:TogetherService,
    private router:Router
  ) { }

  ngOnInit() {
    $("#datepicker").datepicker({
      dateFormat:"yy/mm/dd",
      onClose:(dataText)=>{
        // console.log(dataText);
        this.together.startDate = dataText;
      }
  });
  }
  clickFile(){
    this.myUpload.nativeElement.click();
  }
  selectFile(e:any){
    let that = this;
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function(){
      that.imgUrl = this.result;
    }
  }
  //上传函数的封装开始
  doUploadFile(callback:Function){
    let index = this.uploader.queue.length-1;
    this.uploader.queue[index].onSuccess = (response,status)=>{
      if(status==200){
        let result = JSON.parse(response);
        callback(result);
      }else{
        console.log("服务器不通，请稍后再试");
      }
    }
    // 执行文件上传操作
    this.uploader.queue[index].upload();
  }
  //上传函数的封装结束
  
  //添加结伴
  addCompany(){
    this.doUploadFile((result)=>{
      this.together.coverImg=result.imgUrl;
      this.togetherservice.add(this.together).subscribe((data)=>{
        let result = data.json();
        console.log(result);
        if(result.code =="success"){
          this.router.navigate(["/companyindex"]);
        }
      });
    });
  }

}
