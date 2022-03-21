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
  Name:string="Seher";
  Gender:string="F";
  DOB:string=new Date(1999,7,27).toLocaleDateString();
  Area:string="South Banglore";
  IsAvailable:boolean=false;





  // Lab 7: StyleBinding - isAvailable
  IsItalic:boolean=true
  

  // Lab 5: Property Binding - ImgSrc
  ImgSrcF="../../assets/images/female.png"
  ImgSrcM="../../assets/images/male.png"


  // Lab 6: Class Binding - KeyStyle
  KeyStyle:string="text-center bold"

  

  // Lab 9: Two-way Binding - searchText


  // Lab 8: Event Binding - box-shadow

  




  // Lab 10: *ngFor - data array


  


  // Lab 13: Input Property - Get counts


}
