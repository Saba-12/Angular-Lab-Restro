import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
// Lab 13: Input Property

  total: number;

  male: number;

  female: number;

}
