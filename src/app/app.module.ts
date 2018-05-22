import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterModule, Routes } from '@angular/router';
import { routing } from "./app-routing";
import { AuthGuard } from "./auth.guard";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginService } from "./login/login.service";
import { RegisterComponent } from './register/register/register.component';

// const appRoutes: Routes = [
//   { path: 'login',      component: LoginComponent },
//   { path: 'dashboard', component: DashboardComponent },  
//   { path: '**', redirectTo: 'login' }
// ];

@NgModule({
  declarations: [
    AppComponent,LoginComponent,DashboardComponent, RegisterComponent  ],
  imports: [
    routing,HttpClientModule,HttpModule,
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    BrowserModule, FormsModule
  ],
  providers: [AuthGuard,LoginService],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
