import { Component } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  nomePortal: string = 'https://leomendesrch.training';

  cursos: string[];
  
  constructor(private cursosService: CursosService){
    this.cursos = this.cursosService.getCursos();
  }
}
