import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UEditorModule,UEditorConfig} from 'ngx-ueditor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainComponent } from './components/main/main.component';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { TourindexComponent } from './components/tourindex/tourindex.component';
import { TourdetailComponent } from './components/tourdetail/tourdetail.component';
import { AddtourComponent } from './components/addtour/addtour.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { CompanydetailComponent } from './components/companydetail/companydetail.component';
import { CompanyindexComponent } from './components/companyindex/companyindex.component';
import { LoginComponent } from './components/login/login.component';
import { RegistComponent } from './components/regist/regist.component';
import { UserimgComponent } from './components/userimg/userimg.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UsersafeComponent } from './components/usersafe/usersafe.component';
import { UserService } from './services/user/user.service';
import { MycompanyComponent } from './components/mycompany/mycompany.component';
import { MytourComponent } from './components/mytour/mytour.component';
import { TournoteService } from './services/tournote/tournote.service';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload'
import { CommentService } from './services/comment/comment.service';
import { AuthService } from './services/auth/auth.service';
import { TogetherService } from './services/together/together.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadComponent,
    FooterComponent,
    TourindexComponent,
    TourdetailComponent,
    AddtourComponent,
    AddcompanyComponent,
    CompanydetailComponent,
    CompanyindexComponent,
    LoginComponent,
    RegistComponent,
    UserimgComponent,
    UserinfoComponent,
    UsersafeComponent,
    MycompanyComponent,
    MytourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    UEditorModule,
    CommonModule,
    FileUploadModule
  ],
  providers: [
    UEditorConfig,
    UserService,
    CommentService,
    AuthService,
    TogetherService,
    TournoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
