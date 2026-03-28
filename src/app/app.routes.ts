import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileSearchComponent } from './pages/profile/profile-search/profile-search.component';
import { SearchResultComponent } from './pages/profile/profile-search/search-result/search-result.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { ProfileDetailsComponent } from './pages/profile/profile-search/search-result/profile-details/profile-details.component';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
     { path: 'profile-search', component: ProfileSearchComponent, canActivate: [authGuard]},
     { path: 'search-result', component: SearchResultComponent},
     { path: 'forgot-password', component: ForgotPasswordComponent},
     { path: 'profile-details/:id', component: ProfileDetailsComponent}
];
