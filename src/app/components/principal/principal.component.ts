import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import {  firstValueFrom } from 'rxjs';
import { Aluno } from '../../models/aluno';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';
import { AddAlunoComponent } from '../add-aluno/add-aluno.component';
import { DialogModule } from 'primeng/dialog';




@Component({
  standalone: true,
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [NavbarComponent, DataViewModule, CommonModule, AddAlunoComponent, DialogModule],

})
export class PrincipalComponent {

  constructor(private http: HttpClient) {}
  alunos: Aluno[] = [];
  displayDialog: boolean = false;

  async ngOnInit()  {

    const alunoTmp = localStorage.getItem('alunos');
    if(alunoTmp){
      this.alunos = JSON.parse(alunoTmp) as Aluno[];
    }

    await this.carregarAlunos();

  }

  handleNavbarEvent(){
    this.openDialog();
  }

  async carregarAlunos() {
    try {

      const response =  await firstValueFrom(this.http.get<Aluno[]>('https://6467a872e99f0ba0a814b5ff.mockapi.io/api/Pessoas'));
      response.forEach((aluno) => {
        if (!this.existeAluno(aluno)) {
          this.alunos.push(aluno);
        }
      });

    } catch (e) {
      console.error(e);
    }
  }

  openDialog() {
    this.displayDialog = true;
  }

  closeDialog(){
    this.displayDialog = false;
  }

  adicionarAluno(novoAluno: Aluno) {
    console.log('aq pai');

    this.alunos.push(novoAluno);
    localStorage.setItem('alunos', JSON.stringify(this.alunos));
    this.closeDialog();
    this.ngOnInit();
  }

  removerAluno(index: number): void {

    if (confirm('Tem certeza que deseja remover este aluno?')) {
      this.alunos.splice(index, 1);

      localStorage.setItem('alunos', JSON.stringify(this.alunos));
      this.ngOnInit();
    }

  }

  private existeAluno(novoAluno: Aluno): boolean {
    return this.alunos.some((aluno) => aluno.Nome === novoAluno.Nome);
  }

}
