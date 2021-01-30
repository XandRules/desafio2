import { DashboardService } from './../dashboard-service/dashboard.service';

import { Binario } from './../../binario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-desafio-calc-binario',
  templateUrl: './desafio-calc-binario.component.html',
  styleUrls: ['./desafio-calc-binario.component.css']
})
export class DesafioCalcBinarioComponent implements OnInit {

  result: string

  calculoForm: FormGroup;
  binario: Binario;

  constructor(private fb: FormBuilder,
    private dashboardService: DashboardService,
    private toastrService: ToastrService) {}

  ngOnInit() {

    this.calculoForm = this.fb.group({
      binario1: ['', [Validators.required]],
      binario2: ['', [Validators.required]],
      operator: ['', [Validators.required]],
    });

  }

  calcular() {
    if(this.calculoForm.valid){
      this.binario = Object.assign({}, this.binario, this.calculoForm.value);

      if(this.validateInputs()){

        this.result = this.dashboardService.doOperation(this.binario.binario1,this.binario.binario2, this.binario.operator);
        this.toastrService.success('Calculado com Sucesso', `O Calculo foi realizado ${this.result}`,{
          progressBar: true,
          progressAnimation: 'increasing',
          tapToDismiss: true,
          timeOut: 3000
        });

      }else{
        this.calculoForm.reset();
        this.toastrService.error('Erro de validação', 'Verifique seus dados e tente Novamente',{
          progressBar: true,
          progressAnimation: 'increasing',
          tapToDismiss: true,
          timeOut: 3000
        });
      }

    }
  }

  validateInputs(): boolean{

    let numero1 = this.dashboardService.toNumber(this.binario.binario1.toString())
    let numero2 = this.dashboardService.toNumber(this.binario.binario2.toString())

    console.log(numero1, numero2);

    if(numero1 < 0 || numero1 > 255 || numero2 < 0 || numero2 > 255){
      return false;
    }

    return Boolean(this.dashboardService.isBinary(this.binario.binario1.toString()) &&
    this.dashboardService.isBinary(this.binario.binario2.toString()) &&
    this.dashboardService.isValidOperator(this.binario.operator));
  }

  reset(){
    this.calculoForm.reset();
  }

}
