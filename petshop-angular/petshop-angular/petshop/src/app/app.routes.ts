import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { NovidadesComponent } from './pages/novidades/novidades.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { NaoEncontradaComponent } from './pages/nao-encontrada/nao-encontrada.component';

// Aqui ficam as rotas: endereço -> página exibida
export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Início | Patinhas Felizes' },
  { path: 'sobre', component: SobreComponent, title: 'Sobre | Patinhas Felizes' },
  { path: 'servicos', component: ServicosComponent, title: 'Serviços | Patinhas Felizes' },
  { path: 'agendamento', component: AgendamentoComponent, title: 'Agendamento | Patinhas Felizes' },
  { path: 'novidades', component: NovidadesComponent, title: 'Novidades | Patinhas Felizes' },
  { path: 'contato', component: ContatoComponent, title: 'Contato | Patinhas Felizes' },
  { path: '**', component: NaoEncontradaComponent, title: 'Página não encontrada' },
];
