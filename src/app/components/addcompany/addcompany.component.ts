import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#datepicker").datepicker();
  }

}
