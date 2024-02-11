import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { AjouterarticleComponent } from './article/ajouterarticle/ajouterarticle.component';
import { ListearticleComponent } from './article/listearticle/listearticle.component';
import { ModifierarticleComponent } from './article/modifierarticle/modifierarticle.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthentificationComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ArticleComponent,
    AjouterarticleComponent,
    ListearticleComponent,
    ModifierarticleComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
