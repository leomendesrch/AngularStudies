import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos/cursos.component';
import { AppModule } from '../app.module';
import { CursosService } from './cursos.service';

@NgModule({
  declarations: [
    CursoDetalheComponent,
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [CursosService],
  exports: [
    CursoDetalheComponent,
    CursosComponent
  ],
})
export class CursosModule{

}

