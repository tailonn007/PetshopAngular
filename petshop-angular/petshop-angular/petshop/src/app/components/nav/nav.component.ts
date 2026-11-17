import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  itens = [
    { nome: 'Início', rota: '/' },
    { nome: 'Sobre', rota: '/sobre' },
    { nome: 'Serviços', rota: '/servicos' },
    { nome: 'Agendamento', rota: '/agendamento' },
    { nome: 'Novidades', rota: '/novidades' },
    { nome: 'Contato', rota: '/contato' },
  ];
}
