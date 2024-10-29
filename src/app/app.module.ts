import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { AtorComponent } from './components/listagem/ator/ator.component';
import { ClasseComponent } from './components/listagem/classe/classe.component';
import { DiretorComponent } from './components/listagem/diretor/diretor.component';
import { CadastroAtorComponent } from './components/cadastro/cadastro-ator/cadastro-ator.component';
import { CadastroDiretorComponent } from './components/cadastro/cadastro-diretor/cadastro-diretor.component';
import { CadastroClasseComponent } from './components/cadastro/cadastro-classe/cadastro-classe.component';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './components/base/components/base.component';
import { TabelaComponent } from './components/listagem/tabela/tabela.component';
import { HttpClientModule } from '@angular/common/http';
import { AtorService } from './service/atorService';
import { ClasseService } from './service/classeService';
import { DiretorService } from './service/diretorService';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ItemComponent } from './components/listagem/item/item.component';
import { CadastroItemComponent } from './components/cadastro/cadastro-item/cadastro-item.component';
import { CadastroTituloComponent } from './components/cadastro/cadastro-titulo/cadastro-titulo.component';
import { TituloComponent } from './components/listagem/titulo/titulo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './service/itemService';
import { TituloService } from './service/tituloService';
import { HomeComponent } from './components/home/home.component';

const routes : Routes = [
  {path: 'cadastro-ator', component: CadastroAtorComponent },
  {path: 'cadastro-classe', component: CadastroClasseComponent },
  {path: 'cadastro-diretor', component: CadastroDiretorComponent },
  {path: 'cadastro-item', component: CadastroItemComponent },
  {path: 'cadastro-titulo', component: CadastroTituloComponent },
  {path: 'atores/:id', component: AtorComponent},
  {path: 'search/:keyword', component: SearchComponent},
  {path: 'classes/:id', component: ClasseComponent},
  {path: 'diretores/:id', component: DiretorComponent},
  {path: 'diretores', component: DiretorComponent},
  {path: 'atores', component: AtorComponent},
  {path: 'classes', component: ClasseComponent},
  {path: 'home', component: HomeComponent},
  { path: 'tabela', component: TabelaComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},

];


@NgModule({
  declarations: [
    AppComponent,
    MenuCategoriesComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent,
    SearchComponent,
    CadastroAtorComponent,
    CadastroDiretorComponent,
    CadastroClasseComponent,
    BaseComponent,
    TabelaComponent,
    ItemComponent,
    CadastroItemComponent,
    CadastroTituloComponent,
    TituloComponent,
    HomeComponent,


  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  providers: [AtorService,
              ClasseService,
              DiretorService,
              ItemService,
              TituloService,
              HomeComponent,
  ],
  bootstrap: [AppComponent]
})



export class AppModule {


}
