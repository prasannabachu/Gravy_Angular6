import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./auth.guard";
import { LoginService } from "./login/login.service";
//import { AuthGuard } from './guards/auth.guard';
//import { OperationsDashBoardComponent } from './operations-dashboard/operations-dashboard.component';
//import { DrillViewComponent } from './drill-level/drill-view/drill-view.component';

const appRoutes: Routes = [


    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },



    // otherwise redirect to home
    // { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);