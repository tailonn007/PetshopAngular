import { Component, Input } from '@angular/core';

// Cabeçalho que se repete no topo de cada página
@Component({
  selector: 'app-titulo-pagina',
  templateUrl: './titulo-pagina.component.html',
  styleUrl: './titulo-pagina.component.css',
})
export class TituloPaginaComponent {
  @Input() titulo = '';
  @Input() subtitulo = '';
}
