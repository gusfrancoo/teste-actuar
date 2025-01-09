import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-add-aluno',
  imports: [DialogModule, CommonModule, FormsModule, DropdownModule, CalendarModule, InputTextModule, ButtonModule],
  templateUrl: './add-aluno.component.html',
  styleUrl: './add-aluno.component.css'
})
export class AddAlunoComponent {
  @Output() onAddAluno = new EventEmitter<any>();

  displayDialog: boolean = false;

  aluno = {
    Nome: '',
    Email: '',
    DataNascimento: '',
    Sexo: '',
  };

  sexos = [
    { label: 'Masculino', value: 'M' },
    { label: 'Feminino', value: 'F' },
  ];

  openDialog() {
    this.displayDialog = true;
  }

  closeDialog() {
    this.displayDialog = false;
    this.resetForm();
  }

  saveAluno() {
    if (this.aluno.Nome && this.aluno.Email && this.aluno.DataNascimento && this.aluno.Sexo) {
      this.onAddAluno.emit(this.aluno);
      this.resetForm();
    }
  }

  resetForm() {
    this.aluno = {
      Nome: '',
      Email: '',
      DataNascimento: '',
      Sexo: '',
    };
  }
}
