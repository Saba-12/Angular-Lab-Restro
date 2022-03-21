import { Injectable } from '@angular/core';
import { Employee } from '../../shared/models/Employee';

// Lab 14: Services - Injectable()

export class EmployeeService {
    
    getEmployees():Employee[]{
        return[
            {EmployeeId:2453, Name:"Seher",Gender:"F",Area:"South Banglore",IsAvailable:true,DOB:new Date (1999,6,26)},
            {EmployeeId:2452, Name:"ABC" , Gender:"M" ,Area:"Chennai" , IsAvailable:true , DOB: new Date(1998,4,3)},
            {EmployeeId:2451, Name:"DEF" , Gender:"F" ,Area:"Marthali" , IsAvailable:true , DOB:new Date(1998,8,4)}
        ]
    }





    url:string = 'http://219.65.96.170:9101/api/employee';
    
    constructor(){}
    
    // Lab 15: HTTP Service - RxJs - http.get



    // Lab 17: Forms - http.post
}