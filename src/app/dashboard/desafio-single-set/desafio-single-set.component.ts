import { ToastrService } from 'ngx-toastr';
import { DashboardService } from './../dashboard-service/dashboard.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';

export class MySet{
  numero1: number
}
@Component({
  selector: 'app-desafio-single-set',
  templateUrl: './desafio-single-set.component.html',
  styleUrls: ['./desafio-single-set.component.css']
})
export class DesafioSingleSetComponent implements OnInit {

  result: string
  set: MySet
  addForm: FormGroup;
  private singleSet: Set<number> = new Set();

  constructor(private fb: FormBuilder,
    private dashboardService: DashboardService,
    private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      numero1: ['', [Validators.required]]
    });
  }

  reset(){
    console.log('reset')
    this.addForm.reset();
    this.singleSet.clear();
    this.result = ''
  }

  public add() {

    this.set = Object.assign({}, this.set, this.addForm.value);

    if(this.set.numero1 >= -1000 && this.set.numero1 <= 1000 ){

      if (!this.singleSet.has(this.set.numero1)) {
        this.singleSet.add(this.set.numero1);

        this.toastrService.success('Valor add com sucesso', `O Número ${this.set.numero1} foi adicionado`,{
          progressBar: true,
          progressAnimation: 'increasing',
          tapToDismiss: true,
          timeOut: 3000
        });


      }else{
        this.toastrService.error('Valor duplicado', 'Tente outro número',{
          progressBar: true,
          progressAnimation: 'increasing',
          tapToDismiss: true,
          timeOut: 3000
        });
      }
      this.result = [...this.singleSet]
        .sort((a, b) => {
          return a - b;
        }) .join(", ");
      this.set.numero1 = null;
    }else{
      this.toastrService.error('Erro de validação', 'O número deve estar entre -1000 e 1000',{
        progressBar: true,
        progressAnimation: 'increasing',
        tapToDismiss: true,
        timeOut: 3000
      });
    }

  }

}
