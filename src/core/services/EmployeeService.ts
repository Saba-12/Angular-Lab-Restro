import { Injectable } from '@angular/core';
import { Employee } from '../../shared/models/Employee';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map,catchError} from 'rxjs/operators';

// Lab 14: Services - Injectable()

@Injectable()
export class EmployeeService {
  // getEmployees():Employee[]{
  //     return[
  //         {EmployeeId:2453, Name:"Seher",Gender:"F",Area:"South Banglore",IsAvailable:true,DOB:new Date (1999,6,26)},
  //         {EmployeeId:2452, Name:"ABC" , Gender:"M" ,Area:"Chennai" , IsAvailable:true , DOB: new Date(1998,4,3)},
  //         {EmployeeId:2451, Name:"DEF" , Gender:"F" ,Area:"Marthali" , IsAvailable:true , DOB:new Date(1998,8,4)}
  //     ]
  // }

  url: string = 'https://ng-http-ea91a-default-rtdb.firebaseio.com/employeeDB.json';

  constructor(private _http: HttpClient) {}

  // Lab 15: HTTP Service - RxJs - http.get

  // getEmployees(){
  //     return this._http.get(this.url).pipe()
  // }
  getEmpData() {
    return this._http.get(this.url).pipe(
      map((responseData) => {
        const empData: Employee[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            empData.push({ ...responseData[key], EmployeeId: key });
          }
        }
        console.log('Http Service', empData);

        return empData;
      }),
      catchError((errRes) => {
        return throwError(() => new Error(errRes));
      })
    );
  }

  // Lab 17: Forms - http.post
}
