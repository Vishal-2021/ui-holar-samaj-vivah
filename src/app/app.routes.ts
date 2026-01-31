import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileSearchComponent } from './pages/profile/profile-search/profile-search.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'profile', component: ProfileComponent },
     { path: 'profile-search', component: ProfileSearchComponent }
];
