import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TourindexComponent } from './components/tourindex/tourindex.component';
import { AddtourComponent } from './components/addtour/addtour.component';
import { TourdetailComponent } from './components/tourdetail/tourdetail.component';
import { CompanyindexComponent } from './components/companyindex/companyindex.component';
import { CompanydetailComponent } from './components/companydetail/companydetail.component';
import { LoginComponent } from './components/login/login.component';
import { RegistComponent } from './components/regist/regist.component';
import { MytourComponent } from './components/mytour/mytour.component';
import { AddcompanyComponent } from './components/addcompany/addcompany.component';
import { UsersafeComponent } from './components/usersafe/usersafe.component';
import { MycompanyComponent } from './components/mycompany/mycompany.component';

const routes: Routes = [
  {path:'',component:MainComponent,children:[
    {path:'',component:TourindexComponent},
    {path:'tourindex',component:TourindexComponent},
    {path:'addtour',component:AddtourComponent},
    {path:'tourdetail',component:TourdetailComponent},
    {path:'companyindex',component:CompanyindexComponent},
    {path:'companydetail',component:CompanydetailComponent},
    {path:'mytour',component:MytourComponent},
    {path:'addcompany',component:AddcompanyComponent},
    {path:'usersafe',component:UsersafeComponent},
    {path:'mycompany',component:MycompanyComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'regist',component:RegistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
