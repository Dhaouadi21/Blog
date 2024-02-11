import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { ListearticleComponent } from './article/listearticle/listearticle.component';
import { ModifierarticleComponent } from './article/modifierarticle/modifierarticle.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'listearticle', component: ListearticleComponent },
  { path: 'listearticle/:id', component: ModifierarticleComponent },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
