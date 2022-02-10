import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  Fname = "";
  Lname = "";
  Email = "";
  School = "";

  form = "width: 30rem";
  outputStyle = "margin-bottom: 0";

  constructor() { }

  ngOnInit(): void {
  }

}
