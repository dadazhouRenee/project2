import { Component, OnInit } from '@angular/core';
import { User } from '../../extras/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-usersafe',
  templateUrl: './usersafe.component.html',
  styleUrls: ['./usersafe.component.css']
})
export class UsersafeComponent implements OnInit {

  constructor(private us:UserService) { }

  ngOnInit() {
  }
  nikeName:string;
  user:User =new User(null,"","");
  doUpdateName(){
    this.user.nikeName= this.nikeName;
    this.us.updateName(this.user).subscribe( (data)=>{
      console.log(data.json());
    });

  }

}
