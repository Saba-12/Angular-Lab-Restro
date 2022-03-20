import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
    url: string;
    company: string;
    createdby: string;

    ngOnInit(): void {
        this.url = 'http://www.pratian.com//';
        this.company = 'pratian.com';
        this.createdby = 'Website designed by';
    }
}
