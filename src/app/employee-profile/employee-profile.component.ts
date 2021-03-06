import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})

export class EmployeeProfileComponent implements OnInit {

  id:number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(
      params => this.id = +params.get("id")
    )
      alert(this.id);
  }

}
