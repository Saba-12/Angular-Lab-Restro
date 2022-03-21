import { Component, OnInit, Input} from '@angular/core';

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

  @Input()
  total: number;

  @Input()
  male: number;

  @Input()
  female: number;

}
