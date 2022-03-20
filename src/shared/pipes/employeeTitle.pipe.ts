import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'employeeTitle'
})

export class EmployeeTitlePipe implements PipeTransform{
    transform(value: string, gender:string): string{
        // Lab 12: Custom Pipes - Salutation

        
        return "";
    }
}

