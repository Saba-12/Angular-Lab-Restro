import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/Employee'
import { EmployeeService } from '../../core/services/EmployeeService';
import { error } from '@angular/compiler/src/util';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  // Lab 14: Services - getEmployees()
  employees: Employee[] = [];
  constructor(private _employeeService: EmployeeService) { 
    
  }

  ngOnInit(): void {
    

    // Lab 15: HTTP Service - RxJs

    
    
  }


  // Lab 4: Interpolation - Person data



  // Lab 7: StyleBinding - isAvailable


  // Lab 5: Property Binding - ImgSrc



  // Lab 6: Class Binding - KeyStyle

  

  // Lab 9: Two-way Binding - searchText


  // Lab 8: Event Binding - box-shadow

  




  // Lab 10: *ngFor - data array


  


  // Lab 13: Input Property - Get counts


}
