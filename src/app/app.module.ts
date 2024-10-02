import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { Routes } from '@angular/router';
import { AtorComponent } from './components/ator/ator.component';
import { ClasseComponent } from './components/classe/classe.component';
import { DiretorComponent } from './components/diretor/diretor.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuCategoriesComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  const routes : Routes = [
    {path: 'atores/:id', component: AtorComponent},
    {path: 'search/:keyword', component: SearchComponent},
    {path: 'classes/:id', component: ClasseComponent},
    {path: 'diretores/:id', component: DiretorComponent},
    {path: 'diretores', component: DiretorComponent},
    {path: 'atores', component: AtorComponent},
    {path: 'classes', component: ClasseComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/', pathMatch: 'full'},

  ];
}
