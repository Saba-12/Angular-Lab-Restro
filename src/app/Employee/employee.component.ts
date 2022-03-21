import { Component, OnInit, HostListener ,ViewChild,AfterViewInit} from '@angular/core';
import { Employee } from '../../shared/models/Employee'
import { EmployeeService } from '../../core/services/EmployeeService';
import { error } from '@angular/compiler/src/util';
import { ThrowStmt } from '@angular/compiler';
import { EmployeeCountComponent } from '../employee-count/employee-count.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  // Lab 14: Services - getEmployees()
  // employees: Employee[] = [
  //   {EmployeeId:2453, Name:"Seher",Gender:"F",Area:"South Banglore",IsAvailable:true,DOB:new Date (1999,6,26)},
  //   {EmployeeId:2452, Name:"ABC" , Gender:"M" ,Area:"Chennai" , IsAvailable:true , DOB: new Date(1998,4,3)},
  //   {EmployeeId:2451, Name:"DEF" , Gender:"F" ,Area:"Marthali" , IsAvailable:true , DOB:new Date(1998,8,4)},
  // ];
  employees:Employee[]=[];
  constructor(private _employeeService: EmployeeService) { 
    this.employees=this._employeeService.getEmployees();
    
  }

  ngOnInit(): void {
    

    // Lab 15: HTTP Service - RxJs

    
    
  }
//  @ViewChild(EmployeeCountComponent)
//  childComponent:EmployeeCountComponent

//  childData:string;

//  ngAfterViewInit(){
//    this.childData=this.childComponent.name;
//  }

  // Lab 4: Interpolation - Person data
  // Name:string="Seher";
  // Gender:string="F";
  // DOB:string=new Date(1999,7,27).toLocaleDateString();
  // Area:string="South Banglore";
  // IsAvailable:boolean=false;





  // Lab 7: StyleBinding - isAvailable
  IsItalic:boolean=true


  // Lab 5: Property Binding - ImgSrc
  ImgSrcF="../../assets/images/female.png"
  ImgSrcM="../../assets/images/male.png"


  // Lab 6: Class Binding - KeyStyle
  KeyStyle:string="text-center bold"

  

  // Lab 9: Two-way Binding - searchText
  searchText:string="";


  // Lab 8: Event Binding - box-shadow
    mouseOver($event){
        $event.srcElement.classList.add("box-shadow");
    }

    mouseOut($event){
        $event.srcElement.classList.remove("box-shadow");
    }

    @HostListener('dblclick')
    OnDblClick(){
      alert("Double click event is listened by the DOM");
    }
  




  // Lab 10: *ngFor - data array
  trackByEmpID(index:number, employee:Employee):number{
    return employee.EmployeeId;
  }
  


  // Lab 13: Input Property - Get counts

    getTotalCount():number{
      return this.employees.length;
    }

    getMaleCount():number{
      return this.employees.filter(x=>x.Gender ==="M").length;
    }

    getFemaleCount():number{
      return this.employees.filter(x=>x.Gender ==="F").length;
    }

    // name:string="You have access"
}
