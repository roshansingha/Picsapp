import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { environment } from "../environments/environment";
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
