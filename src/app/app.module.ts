import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './UI/home/home.component';
import { HeaderComponent } from './UI/shared/header/header.component';
import { FooterComponent } from './UI/footer/footer.component';
import { RegisterComponent } from './UI/register/register.component';
import { AboutUsComponent } from './UI/about-us/about-us.component';
import { ProgramsComponent } from './UI/programs/programs.component';
import { MembershipComponent } from './UI/membership/membership.component';
import { TestimonialsComponent } from './UI/testimonials/testimonials.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewGateway } from './domain/models/Review/gateway/review-gateway';
import { ReviewServiceService } from './infraestructure/review-api/review-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlansGateway } from './domain/models/plans/gateway/plans-gateway';
import { PlanService } from './infraestructure/plan-api/plan.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './UI/login/login.component';
import { SidebardComponent } from './UI/dashboard/sidebard/sidebard.component';
import { ContentComponent } from './UI/dashboard/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    AboutUsComponent,
    ProgramsComponent,
    MembershipComponent,
    TestimonialsComponent,
    LoginComponent,
    SidebardComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: ReviewGateway, useClass: ReviewServiceService },
    { provide: PlansGateway, useClass: PlanService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
