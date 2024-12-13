import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

//Components
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/components/base.component';
import { HomeComponent } from './components/home/home.component';
import { MenuCategoriesComponent } from './components/menu-categories/menu-categories.component';
import { SearchComponent } from './components/search/search.component';

// Listagem
import { AtorComponent } from './components/listagem/ator/ator.component';
import { ClasseComponent } from './components/listagem/classe/classe.component';
import { DiretorComponent } from './components/listagem/diretor/diretor.component';
import { ItemComponent } from './components/listagem/item/item.component';
import { SocioComponent } from './components/listagem/socio/socio.component';
import { TabelaComponent } from './components/listagem/tabela/tabela.component';
import { TituloComponent } from './components/listagem/titulo/titulo.component';

// Cadastro
import { CadastroAtorComponent } from './components/cadastro/cadastro-ator/cadastro-ator.component';
import { CadastroClasseComponent } from './components/cadastro/cadastro-classe/cadastro-classe.component';
import { CadastroDependenteComponent } from './components/cadastro/cadastro-dependente/cadastro-dependente.component';
import { CadastroDiretorComponent } from './components/cadastro/cadastro-diretor/cadastro-diretor.component';
import { CadastroItemComponent } from './components/cadastro/cadastro-item/cadastro-item.component';
import { CadastroSocioComponent } from './components/cadastro/cadastro-socio/cadastro-socio.component';
import { CadastroTituloComponent } from './components/cadastro/cadastro-titulo/cadastro-titulo.component';


//Services
import { EfetuarDevolucaoComponent } from './components/cadastro/efetuar-devolucao/efetuar-devolucao.component';
import { EfetuarLocacaoComponent } from './components/cadastro/efetuar-locacao/efetuar-locacao.component';
import { AtorService } from './service/atorService';
import { ClasseService } from './service/classeService';
import { DependenteService } from './service/dependenteService';
import { DevolucaoService } from './service/devolucaoService';
import { DiretorService } from './service/diretorService';
import { ItemService } from './service/itemService';
import { LocacaoService } from './service/locacaoService';
import { TituloService } from './service/tituloService';
import { SocioService } from './service/socioService';
import { TelefoneMaskDirective } from './components/base/directive/telefone-mask.directive';
import { ClienteService } from './service/clienteService';
import { PesquisaTituloComponent } from './components/listagem/pesquisa-titulo/pesquisa-titulo.component';


const routes : Routes = [
  {path: 'cadastro-ator', component: CadastroAtorComponent },
  {path: 'cadastro-dependente', component: CadastroDependenteComponent },
  {path: 'cadastro-classe', component: CadastroClasseComponent },
  {path: 'cadastro-diretor', component: CadastroDiretorComponent },
  {path: 'cadastro-item', component: CadastroItemComponent },
  {path: 'cadastro-titulo', component: CadastroTituloComponent },
  {path: 'cadastro-socio', component: CadastroSocioComponent },
  {path: 'atores/:id', component: AtorComponent},
  {path: 'search/:keyword', component: SearchComponent},
  {path: 'classes/:id', component: ClasseComponent},
  {path: 'efetuar-locacao', component: EfetuarLocacaoComponent},
  {path: 'efetuar-devolucao', component: EfetuarDevolucaoComponent},
  {path: 'pesquisa-titulo', component: PesquisaTituloComponent},

  {path: 'diretores/:id', component: DiretorComponent},
  {path: 'diretores', component: DiretorComponent},
  {path: 'atores', component: AtorComponent},
  {path: 'classes', component: ClasseComponent},
  {path: 'socios', component: SocioComponent},
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
    BaseComponent,
    TabelaComponent,
    ItemComponent,
    TituloComponent,
    HomeComponent,
    SearchComponent,

    CadastroAtorComponent,
    CadastroDiretorComponent,
    CadastroClasseComponent,
    CadastroItemComponent,
    CadastroTituloComponent,
    CadastroSocioComponent,
    CadastroDependenteComponent,
    EfetuarLocacaoComponent,
    EfetuarDevolucaoComponent,
    TelefoneMaskDirective,
    PesquisaTituloComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),


  ],
  providers: [AtorService,
              ClasseService,
              DiretorService,
              DependenteService,
              ItemService,
              TituloService,
              SocioService,
              LocacaoService,
              DevolucaoService,
              ClienteService,
              HomeComponent,
  ],
  bootstrap: [AppComponent]
})



export class AppModule {


}
