import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UI/home/home.component';
import { RegisterComponent } from './UI/register/register.component';
import { AboutUsComponent } from './UI/about-us/about-us.component';
import { ProgramsComponent } from './UI/programs/programs.component';
import { MembershipComponent } from './UI/membership/membership.component';
import { TestimonialsComponent } from './UI/testimonials/testimonials.component';
import { LoginComponent } from './UI/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
