import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ControleEditoraService } from './shared/services/controle-editora.service';
import { ControleLivrosService } from './shared/services/controle-livros.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ControleEditoraService,
    ControleLivrosService,
  ],
};
