import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitlePipe } from '../shared/pipes/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
  import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialNetworkComponent } from './header/social-network/social-network.component';
import { StoreTitleComponent } from './header/store-title/store-title.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    EmployeeAddComponent,
    HeaderComponent,
    FooterComponent,
    SocialNetworkComponent,
    StoreTitleComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
