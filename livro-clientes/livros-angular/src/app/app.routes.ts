import { Routes } from '@angular/router';
import { LivroListaComponent } from './features/livro-lista/livro-lista.component';

export const routes: Routes = [
  {
    path: '',
    component: LivroListaComponent,
  },
  {
    path: 'LivroDados',
    loadComponent: () =>
      import('./features/livro-dados/livro-dados.component').then(
        (m) => m.LivroDadosComponent
      ),
  },
];
