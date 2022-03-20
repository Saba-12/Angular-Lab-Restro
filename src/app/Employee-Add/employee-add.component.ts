import { Component, OnInit } from '@angular/core';
import {Employee} from '../../shared/models/Employee';
import { EmployeeService } from '../../core/services/EmployeeService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  providers:[EmployeeService]
})
export class EmployeeAddComponent implements OnInit {

  model: Employee;
  constructor(private _empService:EmployeeService, private route:ActivatedRoute,
    private router:Router) {
    
    this.model = new Employee;
   }

  ngOnInit(): void {
  }

  // Lab 17: Forms and Controls - onSubmit
}
