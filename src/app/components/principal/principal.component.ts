import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button'; 
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
  selector: 'app-principal', 
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 

})
export class PrincipalComponent {
  title = 'teste-actuar';
  alunos = [
    { nome: 'João Silva', email: 'joao.silva@email.com' },
    { nome: 'Maria Oliveira', email: 'maria.oliveira@email.com' },
    { nome: 'Carlos Souza', email: 'carlos.souza@email.com' },
  ];

  // Funções básicas
  adicionarAluno() {
    const novoAluno = { nome: 'Novo Aluno', email: 'novo.email@email.com' };
    this.alunos.push(novoAluno);
  }

  editarAluno(aluno: any) {
    const novoNome = prompt('Edite o nome do aluno:', aluno.nome);
    const novoEmail = prompt('Edite o email do aluno:', aluno.email);

    if (novoNome !== null && novoNome.trim() !== '') {
      aluno.nome = novoNome;
    }
    if (novoEmail !== null && novoEmail.trim() !== '') {
      aluno.email = novoEmail;
    }
  }

  excluirAluno(index: number) {
    if (confirm('Tem certeza que deseja excluir este aluno?')) {
      this.alunos.splice(index, 1);
    }
  }
}
